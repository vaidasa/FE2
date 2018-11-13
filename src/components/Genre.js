import React from 'react';
import axios from "axios";
import {endpoints} from "../../config";

export default class Genre extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genreMovieList: [],
    };

    this.requestGenreMovies();

  }

  updateGenreMovies = () => {

  this.props.onReceivedNewList(this.state.genreMovieList);
  };

  render() {
    const {
      genre: {
        id,
        name,
      },
    } = this.props;

    return (
      <div className="genre" onClick = {this.updateGenreMovies}>
        {name}
      </div>
    );
  }
}
