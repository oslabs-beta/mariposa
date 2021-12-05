import React from 'react'
import ReactDOM from 'react-dom'
import './scss/styles.scss';
import App from './App'
import store from './store'
import { Provider } from 'react-redux'

const rootDiv = document.createElement("div");
rootDiv.setAttribute("id", "root");
document.body.appendChild(rootDiv);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootDiv
);


