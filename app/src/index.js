import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import storePersons from "./store/storeConfiguration";
import { Provider } from "react-redux";

const store = storePersons();

const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.subscribe(render);
render();
