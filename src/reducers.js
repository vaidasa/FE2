import { combineReducers } from 'redux';

const initialState = {
  list: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, list: action.movies };

    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
});
