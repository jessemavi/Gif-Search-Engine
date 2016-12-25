import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
  // function to create the store
  const store = createStore(
    rootReducer,
    initialState,
    // allowing Redux dev tools extension to access the store
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );

  if(module.hot) {
    // enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}