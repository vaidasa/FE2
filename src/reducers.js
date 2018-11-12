import { combineReducers } from 'redux';

// initial state for when state isn't present to have a fallback solution
const initialState = {
  list: [],
};

const moviesReducer = (state = initialState, action) => {
  // reducer - always return NEW state, no functionality can be done here
  switch (action.type) {
    case 'SET_MOVIES':
      console.log(action.movies);
      return { ...state, list: action.movies };

    default:
      return state;
  }
};

// rootReducer - connect multiple reducers here
export default combineReducers({
  movies: moviesReducer,
});
