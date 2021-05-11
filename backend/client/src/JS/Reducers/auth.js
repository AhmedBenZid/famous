import {
    USER_LOADING,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_AUTH_USER,
    AUTH_ERRORS,
    GET_ALLUSER,
    UPDATE_USER
} from '../ActionsTypes/Types';

const initialState = {
    token: localStorage.getItem('token'), //null
    user: null,
    isAuth: false,
    isLoading: true,
    msg: null,
    users: []
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case REGISTER_USER:
            return {
                ...state,
                msg: payload.msg
            };
        case LOGIN_USER:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                msg: payload.msg,
                ...payload,
            };
        case GET_AUTH_USER:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                msg: payload.msg,
                ...payload,
            };
        case UPDATE_USER:
            return {
                ...state,
                msg: payload.msg,
                ...payload,
            }
        case GET_ALLUSER:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                msg: payload.msg,
                users: payload
            }
        case AUTH_ERRORS:
        case LOGOUT_USER:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuth: false,
                user: null,
                users: null,
                isLoading: false,
                msg: payload
            };
        default:
            return state;
    }
};

export default authReducer;