import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Redux
import { Provider } from 'react-redux';
import store from './JS/Store/store';

ReactDOM.render(
  <Provider store={store}>
    <App /></Provider>,
  document.getElementById('root')
);

