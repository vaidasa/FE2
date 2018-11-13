import axios from 'axios';
import { setMovies, setGenres, addHeart, removeHeart } from './actions';
import { endpoints } from '../config';


export const getMovies = () => (dispatch) => {
  // thunk - dispatch actions when needed
  axios
    .get(endpoints.mostPopularMovies())
    .then((res) => {
      dispatch(setMovies(res.data.results))
    })
    .catch((error) => console.log(error));
};

export const getGenres = () => dispatch => {
  console.log("on getGenres thunks.js");
  axios
    .get(endpoints.genres())
    .then(({ data: { genres } }) => dispatch(setGenres(genres)))
    .catch(error => console.log(error));
};

export const getMoviesByGenre = (id) => dispatch => {
  axios
    .get(endpoints.genreMovies(id))
    .then(({ data: { results } }) => {
      dispatch(setMovies(results));
    })
    .catch(error => console.log(error));
};


export const heartMovie = (id) => dispatch => {
  dispatch(addHeart(id));
};

export const unheartMovie = (id) => dispatch => {
  dispatch(removeHeart(id));
};