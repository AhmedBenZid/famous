import { GET_PACKS } from '../ActionsTypes/Types';

const initialState = {
    packs: [],
    isLoading: true
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_PACKS:
            return {
                ...state,
                packs: payload,
                isLoading: false
            }
        default:
            return state;
    }
}