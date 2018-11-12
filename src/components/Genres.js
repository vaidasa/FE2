import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { endpoints } from '../../config';
import { getMoviesByGenre, getGenres } from "../thunks";

class Genres extends React.Component {
  constructor(props) {
    super(props);

    props.onGetGenres();
  }

  // requestGenres = () => {
  //   axios
  //     .get(endpoints.genres())
  //     .then((res) => this.setGenreList(res.data.genres))
  //     .catch((error) => console.log(error));
  // };
  //
  // requestGenresMovies = (id) => dispatch => {
  //   const { onChangeList } = this.props;
  //   axios
  //     .get(endpoints.genreMovies(id))
  //     .then((res) => dispatch(setMovies(res)))
  //     .catch((error) => console.log(error));
  //
  //
  // };

  // setGenreList = (genres) => {
  //   this.setState({
  //     genres,
  //   })
  // };

  render() {
    const { genres, onGetMoviesByGenre } = this.props;

    console.log('on render genres.js' + this.props.genres);

    return (
      <div className="genres">
        {genres.map(({ id, name }) => (
          <div key={id} className="genre" onClick={() => onGetMoviesByGenre(id)}>
            {name}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  ({ genres }) => ({
    genres
  }),
  dispatch => ({
    onGetGenres: () => dispatch(getGenres()),
    onGetMoviesByGenre: (id, name) => dispatch(getMoviesByGenre(id, name))
  })
)(Genres);