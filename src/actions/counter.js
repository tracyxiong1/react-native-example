import { createAction } from 'redux-actions';

export const increment = createAction('increment');

export const decrement = createAction('decrement');

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter.get('counter') % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
