import { createStore, combineReducers } from 'redux';
import { persons, person } from './reducers';
import {APP_STATE_DEFAULT} from "./consts/AppStateDefault";

const initialState = APP_STATE_DEFAULT;

const store = createStore(
    combineReducers({ persons, person }),
    initialState
);