import { createStore, applyMiddleware } from 'redux';
import {APP_STATE_DEFAULT} from "../consts/AppStateDefault";
import thunk from "redux-thunk";
import {rootReducer} from "./rootReducer";

const storePersons = (initialState=APP_STATE_DEFAULT) =>
    applyMiddleware(thunk)(createStore)(
    rootReducer,
    initialState
);

export default storePersons;