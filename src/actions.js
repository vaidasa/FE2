export const setMovies = (movies) => {
  // action - always return only object with data, no functionality can be done here
  return {
    type: 'SET_MOVIES',
    payload: {
      movies,
    },
  };
};

export const setGenres = (genres) => {
  return {
    type: 'SET_GENRES',
    payload: {
      genres,
    }
  }
};

export const addHeart = (id) => {
  return {
    type: 'ADD_HEART',
    payload: {
      id,
    },
  }

};

export const removeHeart = (id) => {
  return {
    type: 'REMOVE_HEART',
    payload: {
      id,
    },
  }
};