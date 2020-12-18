import React from "react";
import ReactDOM from 'react-dom';
import App from './container/app/app';
import './assets/styles/index.scss'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
