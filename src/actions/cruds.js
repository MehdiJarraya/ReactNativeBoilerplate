import axios from 'axios';
import * as types from '../actions/actionTypes';
import { dispatchAlert } from '../actions';

//Promise based HTTP client for the browser to consume web service
export const gAxios = (token, url, method = 'get', data = undefined, headers = {}) => {
    return axios({
        url: url,
        data: data,
        timeout: 10000,
        method: method,
        responseType: 'json',
        headers: { ...headers, 'Accept': 'application/json', 'Authorization': 'Bearer ' + token },
    });

}



export const getData = (n, url, token, cb = null) => {
// console.log("from crudsssssss", token)
    return function (dispatch, getState) {
        dispatch({ type: types.APP_LOADING, payload: true });//**call reducer to set loading to "true"(start loading)**
        console.log('finalUrl: ', getState().app.token, getState().app.config.url + url);
         //** consume the web service using get method to get the list of items then call reducer to set new changes**
        return gAxios( getState().app.token? getState().app.token: token, getState().app.config.url + url).then(function (r) {
            console.log("sucess getData", r)
            dispatch({
                type: n + types.GET_ITEMS,
                payload: r.data,
                iserror: false,
            });
            if (cb) { setTimeout(function () { cb(r); }, 10); }
        }).catch(function (r) {
            console.log("fail getData", r)
            dispatchAlert(dispatch, 'Erreur serveur : ' + ((r.response) ? r.response.status : ''));//**call dispatchAlert action**

            dispatch({
                type: n + types.GET_ITEMS,
                payload: [],
                iserror: true
            });
            if (cb) { setTimeout(function () { cb(r.response); }, 10); }
        }).then(function (r) { dispatch({ type: types.APP_LOADING, payload: false }); });//**call reducer to set loading to "false"(stop loading)**
    }
}



export const postData = (n, url, data, token, cb = null) => {

    return function (dispatch, getState) {
        console.log('FINAL URL', getState().app.config.url + url)
        dispatch({ type: types.APP_LOADING, payload: true });//**call reducer to set loading to "true"(start loading)**
        //** consume the web service using post method to pass new item as data then call reducer to set new changes**
        return gAxios( getState().app.token? getState().app.token: token, getState().app.config.url + url, 'post', data).then(function (r) {
            console.log("from crud POST DATA: ", r)
            dispatch({
                type: n + types.CREATE_ITEM,
                payload: r.data? r.data: data,
                iserror: false
            });
            if (cb) { setTimeout(function () { cb(r); }, 10); }
        }).catch(function (r) {
            console.log('POST DATA  ERRROR: ', r)
            dispatchAlert(dispatch, 'Erreur serveur : ' + ((r.response) ? r.response.status : ''));//**call dispatchAlert action**
            dispatch({
                type: n + types.CREATE_ITEM,
                payload: null,
                iserror: true
            });
            if (cb) { setTimeout(function () { cb(r); }, 10); }
        }).then(function (r) { dispatch({ type: types.APP_LOADING, payload: false }); });//**call reducer to set loading to "false"(stop loading)**
    }
}


export const putData = (n, url, id, data, token, cb = null) => {
   
    return function (dispatch, getState) {
        console.log('finalUrl: ', getState().app.config.url + url+id);
        dispatch({ type: types.APP_LOADING, payload: true });//**call reducer to set loading to "true"(start loading)**
        //** */consume the web service using put method to update an item  then call reducer to set new changes**
        return gAxios( getState().app.token? getState().app.token: token, getState().app.config.url + url + id, 'put', data).then(function (r) {
            console.log('sucess putData  : ' + r);
            dispatch({
                type: n + types.UPDATE_ITEM,
                id: id,
                payload: data,  //r.data,
                iserror: false
            });
        }).catch(function (r) {
            console.log('fail putData  : ' + r);
            dispatchAlert(dispatch, 'Erreur serveur : ' + ((r.response) ? r.response.status : ''));//**call dispatchAlert action**
            dispatch({
                type: n + types.UPDATE_ITEM,
                id: id,
                payload: null,
                iserror: true
            });
        }).then(function (r) { dispatch({ type: types.APP_LOADING, payload: false }); });//**call reducer to set loading to "false"(stop loading)**
    }
}

export const deleteData = (n, url, id, token, cb = null) => {
    return function (dispatch, getState) {
        dispatch({ type: types.APP_LOADING, payload: true });//**call reducer to set loading to "true"(start loading)**
        console.log('finalUrl: ', token, getState().app.config.url + url);
        //** */consume the web service using delete method to delete an item  then call reducer to set new changes**
        return gAxios( getState().app.token? getState().app.token: token, getState().app.config.url + url + id, 'delete').then(function (r) {
            console.log("sucess delete resposne", r)
            dispatch({
                type: n + types.DELETE_ITEM,
                id: id,
                iserror: false
            });
        }).catch(function (r) {
            console.log("failllll delete resposne", r)
            dispatchAlert(dispatch, 'Erreur serveur : ' + ((r.response) ? r.response.status : ''));//**call dispatchAlert action**
            dispatch({
                type: n + types.DELETE_ITEM,
                id: id,
                iserror: true
            });
        }).then(function (r) { dispatch({ type: types.APP_LOADING, payload: false }); });//**call reducer to set loading to "false"(stop loading)**
    }
}



