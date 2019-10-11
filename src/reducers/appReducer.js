import * as types from '../actions/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
export default function (state = {
    isDrawerOpen: false,
    alert: { show: false, message: '' },
    appLoading: false,
    userid: '',
    username: '',
    userrights: '',
    token: null,

    config: {
        url: types.GLOBAL_URL + '/api',
    },
    countries: []


}, action = null) {
    switch (action.type) {
        case types.TOGGLE_DRAWER:
            return { ...state, isDrawerOpen: action.payload };
        case types.APP_LOADING:
            return { ...state, appLoading: action.payload };
        case types.TOGGLE_ALERT:
            return { ...state, alert: { show: action.etat, message: action.payload } };

        case 'app_session' + types.CREATE_ITEM:
            if (action.iserror) { return state; }
            // createCookie('login_Token', JSON.stringify(action.payload.success.token)); ***web
            // ***  mobile
            try {
                AsyncStorage.setItem('userToken', action.payload.token);
            } catch (error) {
                console.log("error AsyncStorage")
            }
            console.log("from login reduceeeeerrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", action.payload)
            return {
                ...state,
                token: action.payload.token,
            };
        case 'app_session' + types.DELETE_ITEM:
            // eraseCookie('login_Token'); ***web
            // ***  mobile
            try {
                AsyncStorage.removeItem('userToken');
            } catch (error) {
                console.log("error AsyncStorage")
            }
            return {
                ...state,
                token: null,
                userid: '',
            };
        case 'SET_CURRENT_POSUTION':
            console.log("action payload reducerrrrrrrrr", action.payload)
            return { ...state, currentPosition: { lat: action.payload.lat, lng: action.payload.long } };

        case 'SET_TOKEN':
            console.log("action payload reducerrrrrrrrr", action.payload)
            return { ...state, token: action.payload };

        case 'SET_TOKEN':
            console.log("action payload reducerrrrrrrrr", action.payload)
            return { ...state, token: action.payload };

        case 'GET_COUNTRIES':
            console.log("action payload countries", action.payload)
            return { ...state, countries: action.payload };
        default:
            return state;
    }
}