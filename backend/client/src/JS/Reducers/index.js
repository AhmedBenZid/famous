import { combineReducers } from 'redux';
import authReducer from './auth';
import packs from './packs';

export default combineReducers({
    authReducer, packs
});