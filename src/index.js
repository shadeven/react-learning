import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from "./App";
import {createStore} from 'redux';
import goalsApp from './reducers/reducers';
import {getGoals} from './actions/actions';
import {Provider} from 'react-redux';

let store = createStore(goalsApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
