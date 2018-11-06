import axios from 'axios';
import { setMovies } from './actions';
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
