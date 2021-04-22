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

// export const addCircuit = (newCir) => async dispatch => {
//     try {
//         //headers
//         const config = {
//             headers: {
//                 'x-auth-token': localStorage.getItem('token'),
//             },
//         };
//         await axios.post('api/circuits/', newCir, config)
//         dispatch(getCircuits)
//     } catch (error) {
//         console.error(error);
//     }
// }

// export const removeCircuit = (cirId) => async dispatch => {
//     try {
//         //headers
//         const config = {
//             headers: {
//                 'x-auth-token': localStorage.getItem('token'),
//             },
//         };
//         await axios.delete(`api/ciruits/${cirId}`, config);
//         dispatch(getCircuits)
//     } catch (error) {
//         console.error(error);
//     }
// }