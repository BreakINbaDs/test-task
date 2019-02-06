import { createStore, applyMiddleware } from 'redux';
import {APP_STATE_DEFAULT} from "../consts/AppStateDefault";
import thunk from "redux-thunk";
import {rootReducer} from "./rootReducer";

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
    rootReducer,
    initialState
);

export default storePersons;