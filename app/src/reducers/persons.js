import C from '../actions/constants';

export const persons = (state = [], action) => {
    switch (action.type) {
        case C.FETCH_PERSONS: return [
            ...state,
        ];
        case C.ADD_PERSON : return [
            ...state,
            person({}, action)
        ];
        case C.REMOVE_PERSON : return state.filter(
            c => c.id !== action.id
        );
        default:
            return state
    }
};