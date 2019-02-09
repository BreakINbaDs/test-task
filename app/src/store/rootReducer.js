import { combineReducers } from 'redux';
import {index, person, loader, personView, personCreateForm, pagination, error} from "../reducers/index";

export const rootReducer = combineReducers({
    persons: index,
    person,
    personView,
    personCreateForm,
    pagination,
    loader,
    error
});
