export const setMovies = (movies) => {
  // action - always return only object with data, no functionality can be done here
  return {
    type: 'SET_MOVIES',
    payload: movies,
  };
};

export const setGenres = genres => ({
  type: 'SET_GENRES',
  payload: genres
});
