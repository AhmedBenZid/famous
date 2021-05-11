import axios from 'axios'
import {
    GET_PACKS
} from '../ActionsTypes/Types';


export const getPacks = () => async (dispatch) => {
    try {
        const res = await axios.get('/packs/allpacks');
        dispatch({
            type: GET_PACKS,
            payload: res.data
        })
    } catch (error) {
        console.error(error);
    }
}

export const addPack = (newPack) => async dispatch => {
    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        await axios.post('packs/addpack', newPack, config)
        dispatch(getPacks)
    } catch (error) {
        console.error(error);
    }
}

export const updatePack = (editedPack) => async dispatch => {
    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        await axios.put('/packs/editpack', editedPack, config)
        dispatch(getPacks)
    } catch (error) {
        console.error(error);
    }
}

export const removePack = (packId) => async dispatch => {
    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        await axios.delete(`/packs/delpack/${packId}`, config);
        dispatch(getPacks)
    } catch (error) {
        console.error(error);
    }
}