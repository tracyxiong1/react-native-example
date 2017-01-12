import { createActions } from 'redux-actions';

export const { push, pop, back } = createActions('push', 'pop', 'back');
