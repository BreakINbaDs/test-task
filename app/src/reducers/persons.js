import C from '../actions/constants';

export const persons = (state = [], action) => {
    switch (action.type) {
        case C.FETCH_PERSONS: return [
            ...state,
        ];
        case C.PERSONS_FETCHED:
            return action.data.data;
        default:
            return state
    }
};

export const pagination = (state = {}, action) => {
    switch (action.type) {
        case C.PERSONS_FETCHED:
            return action.data.additional_data.pagination;
        default:
            return state
    }
};

export const error = (state = {}, action) => {
    switch (action.type) {
        case C.ERROR:
            return action.error;
        default:
            return state
    }
};