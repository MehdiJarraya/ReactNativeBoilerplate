
import { combineReducers } from 'redux';
import app from './appReducer'
import user from './userReducer'
export default combineReducers({
    app,
    user,
});