import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App/App';
import './style.css';
import '../favicon.ico'
import {createStore} from 'redux'
import {rootReducer} from "./reducers";
import {Provider} from 'react-redux'
const store = createStore(rootReducer);
console.log(store)
ReactDom.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('app')
);