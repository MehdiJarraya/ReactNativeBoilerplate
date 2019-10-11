import * as types from './actionTypes';
import * as cruds from './cruds';
import axios from 'axios';
import I18n from '../Utils/i18n';


// Login to the application then call reducer to set user token
export const loginUser = (o, cb = null) => {
  // lorsque l'url est introuvable 404 request method will be automaticly OPTION
  console.log("action loginnnnnnnnnn", o)
  return cruds.postData('app_session', "/login", o, null, cb);
}


export const loginThenNavigate = (o, navigation, cb = null) => {
  return (dispatch, getState) => {
      return dispatch(loginUser(o, cb)).then(() => {
          // getState must be called after dispatch to get the latest state
          // getState().app.alert.show 
          navigation.navigate("Drawer")
      })
  }
}


export const setTokenAfterReloadingInDevMode = (token, cb = null) => {
  return {
    type: 'SET_TOKEN',
    payload: token
  };
}



// There no alert actually  in current version
//Showing an alert when there is an error 
export const dispatchAlert = (dispatch, message) => {
  dispatch({
    type: types.TOGGLE_ALERT,
    payload: message,
    etat: true
  });
}

// There no alert actually  in current version
//Showing an alert when there is an error 
export const hideAlert = () => {
  return function (dispatch, getState) {
    dispatch({
      type: types.TOGGLE_ALERT,
      payload: '',
      etat: false
    });
  }
}

// get user from server  then call the reducer to refresh it
export const getUserInfo = (f = '', paging = '', cb = null) => {
  return cruds.getData('profile', "/my_details/", userToken, cb);
}

// update profile then call the reducer to refresh it
export const updateProfile = (o, itemId, cb = null) => {
  console.log("from uupdateProfile Item", o)
  return cruds.putData('employee', '/users/', o.id, o, userToken, cb);
}

//call the reducer to delete token
export const logout = () => {
  return {
    type: 'app_session' + types.DELETE_ITEM,
  };
}




export const loadArea = (f = '', page = '1', orderBy = '', order = '', cb = null) => {
  // "/Area?page="+page+'&'+ f+'&'+ orderBy +'&'+ order, cb);
  return cruds.getData('area', "/Area", cb);
}

export const createAreaItem = (item, cb = null) => {
  return cruds.postData('area', "/Area", item, cb);
}

export const deleteAreaItem = (itemId, cb = null) => {
  return cruds.deleteData('area', "/Area/", itemId, cb);
}

export const updateAreaItem = (item, cb = null) => {
  console.log("from updateLocationItem", item)
  return cruds.putData('area', '/Area', item.id, item, cb);
}











