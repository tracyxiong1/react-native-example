/* eslint-disable import/no-extraneous-dependencies */
import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import rootReducer from './reducers';

let enhancer;
export default function confirgureStore(initialState) {
  if (__DEV__) {
    enhancer = compose(
      applyMiddleware(thunk),
      devTools({
        name: Platform.OS,
        hostname: 'localhost',
        port: 5678,
      }),
    );
  } else {
    enhancer = compose(
      applyMiddleware(thunk),
    );
  }

  return createStore(rootReducer, initialState, enhancer);
}
