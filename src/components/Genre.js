import React from 'react';
import axios from "axios";
import {endpoints} from "../../config";

export default class Genre extends React.Component {
  constructor() {
    super();
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
