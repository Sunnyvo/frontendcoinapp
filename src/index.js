import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store";
import {Provider} from 'react-redux';
import APICable from './api/APICable';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App  apiCable={APICable}
    />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
