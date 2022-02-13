import { createStore } from 'redux';

import rootReducer from './reducers/index'; // import the rootReducer

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);
  return store;
}
