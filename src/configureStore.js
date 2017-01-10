import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function confirgureStore(initialState) {
  return createStore(rootReducer, applyMiddleware(thunk), initialState);
}
