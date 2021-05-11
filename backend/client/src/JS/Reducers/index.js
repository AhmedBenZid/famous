import { combineReducers } from 'redux';
import authReducer from './auth';
import packs from './packs';
import reservation from './reservation';

export default combineReducers({
    authReducer, packs, reservation
});