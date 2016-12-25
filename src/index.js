import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// creating the store by calling previously created configureStore function
const store = configureStore();

// wrapping App container in a Redux Provider. This is what allows us to connect React to the Redux store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);