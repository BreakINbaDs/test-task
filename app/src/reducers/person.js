import C from '../actions/constants';

export const color = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_PERSON: return {
            id: action.id,
            title: action.title,
            color: action.color,
            timestamp: action.timestamp,
            rating: 0
        };
        default : return state;
    }
};