import axios from 'axios';
import {
    USER_LOADING,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_AUTH_USER,
    AUTH_ERRORS,
    ADD_AGENT,
    UPDATE_USER,
    GET_ALLUSER,
    DELETE_USER
} from '../ActionsTypes/Types';

//Set the user loading
const userLoading = () => (dispatch) => {
    dispatch({
        type: USER_LOADING,
    });
};
// Register USer
export const registerUser = (newUser) => async (dispatch) => {
    dispatch(userLoading());
    try {
        const res = await axios.post('/users/register', newUser);
        dispatch({
            type: REGISTER_USER,
            payload: res.data,
        });
    } catch (error) {
        console.dir(error);

        const { errors, msg } = error.response.data;

        if (Array.isArray(errors)) {
            errors.forEach((err) => alert(err.msg));
        }
        console.log(errors);
        if (msg) {
            alert(msg);
        }

        dispatch({
            type: AUTH_ERRORS,
        });
    }
};

// Get auth user
export const getAuthUser = () => async (dispatch) => {
    dispatch(userLoading());

    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        const res = await axios.get('/users/me', config);
        dispatch({
            type: GET_AUTH_USER,
            payload: res.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: AUTH_ERRORS,
        });
    }
};

// Login User
export const loginUser = (formData) => async (dispatch) => {
    dispatch(userLoading());

    try {
        const res = await axios.post('/users/login', formData);
        dispatch({
            type: LOGIN_USER,
            payload: res.data,
        });
    } catch (error) {
        console.dir(error);

        const { errors, msg } = error.response.data;

        if (Array.isArray(errors)) {
            errors.forEach((err) => alert(err.msg));
        }
        console.log(errors);
        if (msg) {
            alert(msg);
        }

        dispatch({
            type: AUTH_ERRORS,
        });
    }
};

//Logout
export const logout = () => (dispatch) => {

    dispatch({
        type: LOGOUT_USER,
    });
};

//All users
export const getAllUsers = () => async (dispatch) => {
    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        }
        const res = await axios.get('/users/', config);
        dispatch({
            type: GET_ALLUSER,
            payload: res.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: AUTH_ERRORS,
        });
    }
};