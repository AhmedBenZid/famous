import { GET_ALL_RESERVATION, GET_RESERVATION } from '../ActionsTypes/Types';

const initialState = {
    all: [],
    userReservation: [],
    isLoading: true
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_RESERVATION:
            return {
                ...state,
                all: payload,
                isLoading: false
            };
        case GET_RESERVATION:
            return {
                ...state,
                userReservation: payload,
                isLoading: false
            };
        default:
            return state;
    }
}