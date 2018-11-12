export const setMovies = (movies) => {
  // action - always return only object with data, no functionality can be done here
  return {
    type: 'SET_MOVIES',
    payload: movies,
  };
};

export const setGenres = (genres) => ({
  type: 'SET_GENRES',
  payload: genres
});

export const addHeart = (id) => ({
  type: 'ADD_HEART',
  payload: id
});

export const removeHeart = (id) => ({
  type: 'REMOVE_HEART',
  payload: id
});