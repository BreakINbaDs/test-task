import { createStore, combineReducers, applyMiddleware } from 'redux';
import {persons, person, loader, personView, pagination, error} from "./reducers/persons";
import {APP_STATE_DEFAULT} from "./consts/AppStateDefault";
import thunk from "redux-thunk";

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
};

const storePersons = (initialState=APP_STATE_DEFAULT) =>
    applyMiddleware(logger, thunk)(createStore)(
    combineReducers({ persons, person, loader, personView, pagination, error }),
    initialState
);

export default storePersons;