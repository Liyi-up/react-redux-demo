import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
// 生产一个store对象
const store = createStore();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
