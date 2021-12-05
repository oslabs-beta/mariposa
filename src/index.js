import React from 'react'
import ReactDOM from 'react-dom'
import './scss/styles.scss';
import App from './App'
import store from './store'
import { Provider } from 'react-redux'

const d = document.createElement('div');
d.getAttribute("id", "root");
body.appendChild(d);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


