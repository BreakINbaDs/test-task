import { combineReducers } from 'redux';
import {index, person, loader, personView, personCreateForm, pagination, organizations, error} from "../reducers/index";

export const rootReducer = combineReducers({
    persons: index,
    person,
    personView,
    personCreateForm,
    organizations,
    pagination,
    loader,
    error
});
