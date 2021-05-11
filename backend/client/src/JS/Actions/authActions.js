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
            type: AUTH_ERRORS
        });
    }
};

//Edite User
export const editUser = (userId, editedUser) => async (dispatch) => {
    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        await axios.put(`/users/updateuser/${userId}`, editedUser, config)
        dispatch({
            type: UPDATE_USER,
            payload: editedUser
        })
        dispatch(getAuthUser())
    } catch (error) {
        console.error(error.message);
    }
};

// Add agent
export const addAgent = (newAgent) => async (dispatch) => {
    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        const res = await axios.post('/users/addagent', newAgent, config);
        dispatch({
            type: ADD_AGENT,
            payload: res.data,
        });
        dispatch(getAllUsers())
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
            errors.forEach((err) => <div class="alert alert-danger">
                {err.msg}
            </div>);
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

//Delete user
export const deleteUser = (id) => async (dispatch) => {
    //headers
    const config = {
        headers: {
            'x-auth-token': localStorage.getItem('token'),
        },
    }
    try {
        await axios.delete(`/users/${id}`, config);
        dispatch(getAllUsers())
    } catch (error) {
        console.log(error);
        dispatch({
            type: AUTH_ERRORS,
        });
    }
}