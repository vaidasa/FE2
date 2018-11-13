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


  render() {
    const { genres, onGetMoviesByGenre } = this.props;

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
  (state) => {
    return {
      genres: state.genres,
    }
  },
  dispatch => ({
    onGetGenres: () => dispatch(getGenres()),
    onGetMoviesByGenre: (id, name) => dispatch(getMoviesByGenre(id, name))
  })
)(Genres);
