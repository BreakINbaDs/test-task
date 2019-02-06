import { combineReducers } from 'redux';
import {index, person, loader, personView, pagination, error} from "../reducers/index";

export const rootReducer = combineReducers({
    persons: index,
    person,
    personView,
    pagination,
    loader,
    error
});
