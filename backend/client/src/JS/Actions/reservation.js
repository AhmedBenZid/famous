import axios from 'axios';
import { GET_ALL_RESERVATION, GET_RESERVATION } from '../ActionsTypes/Types';

export const getAllReservation = () => async (dispatch) => {
    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        const res = await axios.get('/reservations/allreserv', config);
        dispatch(
            {
                type: GET_ALL_RESERVATION,
                payload: res.data
            }
        )
    } catch (error) {
        console.error(error);
    }
}

export const getUserReservation = () => async (dispatch) => {
    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        const res = await axios.get('/reservations/myreserv', config);
        dispatch(
            {
                type: GET_RESERVATION,
                payload: res.data
            }
        )
    } catch (error) {
        console.error(error);
    }
}

export const addReservation = (data) => async (dispatch) => {
    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        await axios.post('/reservations/reservepack', data, config);
        dispatch(getUserReservation)

    } catch (error) {
        console.error(error);
    }
}
