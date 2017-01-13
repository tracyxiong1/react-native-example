import { Map } from 'immutable';
import { handleActions } from 'redux-actions';

const initialState = Map({ counter: 0 });

const reducer = handleActions({
  increment: state => state.update('counter', n => n + 1),
  decrement: state => state.update('counter', n => n - 1),
}, initialState);

export default reducer;
