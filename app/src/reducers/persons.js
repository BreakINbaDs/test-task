import C from '../actions/constants';

export const persons = (state = [], action) => {
    switch (action.type) {
        case C.FETCH_PERSONS: return [
            ...state,
        ];
        case C.FETCH_PERSONS_SUCCESS:
            return action.data.data;
        default:
            return state
    }
};

export const person = (state = {}, action) => {
    switch (action.type) {
        case C.FETCH_PERSON: return {
            ...state,
        };
        case C.FETCH_PERSON_SUCCESS:
            return action.data.data;
        default:
            return state
    }
};

export const pagination = (state = {}, action) => {
    switch (action.type) {
        case C.FETCH_PERSONS_SUCCESS:
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