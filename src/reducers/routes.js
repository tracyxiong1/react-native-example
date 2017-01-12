import { NavigationExperimental } from 'react-native';
import { handleActions } from 'redux-actions';

const { StateUtils } = NavigationExperimental;

const initialState = {
  index: 0,
  routes: [{ key: 'main' }],
};

const reducer = handleActions({
  push: (state, action) => StateUtils.push(state, { key: action.payload }),
  back: (state) => {
    if (state.index > 0) {
      return StateUtils.pop(state);
    }
    return state;
  },
  pop: (state) => {
    if (state.index > 0) {
      return StateUtils.pop(state);
    }
    return state;
  },
}, initialState);

export default reducer;
