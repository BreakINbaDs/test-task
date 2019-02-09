import C from '../actions/constants';

export const index = (state = [], action) => {
    switch (action.type) {
        case C.FETCH_PERSONS:
        case C.DELETE_PERSON: return [
            ...state,
        ];
        case C.FETCH_PERSONS_SUCCESS:
            return state.concat(action.data.data);
        case C.DELETE_PERSON_SUCCESS:
            return state.filter(person => {
                return person.id !== action.id
            });
        case C.ADD_PERSON_SUCCESS:
            return [
                ...state,
                action.data.data
            ];
        case C.SEARCH_PERSON:
            return state.filter(person => {
                return person.name.toLowerCase().includes(action.searchName.toLowerCase())
            });
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

export const loader = (state = {}, action) => {
    switch (action.type) {
        case C.FETCH_PERSONS:
        case C.FETCH_PERSON:
        case C.DELETE_PERSON: return {
            isLoading: true
        };
        case C.FETCH_PERSONS_SUCCESS:
        case C.FETCH_PERSON_SUCCESS:
        case C.DELETE_PERSON_SUCCESS:
        case C.ERROR: return {
            isLoading: false
        };
        default:
            return state;
    }
};

export const personView = (state = {}, action) => {
    switch (action.type) {
        case C.OPEN_PERSON_VIEW: return {
            isOpened: true
        };
        case C.CLOSE_PERSON_VIEW: return {
            isOpened: false
        };
        default:
            return state;
    }
};

export const personCreateForm = (state = {}, action) => {
    switch (action.type) {
        case C.OPEN_CREATE_PERSON_FORM: return {
            isOpened: true
        };
        case C.CLOSE_CREATE_PERSON_FORM: return {
            isOpened: false
        };
        default:
            return state;
    }
};

export const error = (state = {}, action) => {
    switch (action.type) {
        case C.ERROR:
            return action.error;
        default:
            return state;
    }
};