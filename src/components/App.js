import React from 'react';
import axios from 'axios';
import Card from './Card';
import Genre from './Genre';
import { endpoints } from '../../config';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movieList: [],
      genreList: [],
      likedList: [],
    };

    this.requestMovies();
    this.requestGenres();

  }

  requestMovies = () => {
    axios
      .get(endpoints.mostPopularMovies())
      .then((res) => this.setMovieList(res.data.results))
      .catch((error) => console.log(error));
  };

  setMovieList = (movieList) => {
    this.setState({
      movieList,
    })
  };

  requestGenres = () => {
    axios
      .get(endpoints.genres())
      .then((res) => this.setGenreList(res.data.genres))
      .catch((error) => console.log(error));
  };

  setGenreList = (genreList) => {
     this.setState({
       genreList,
     })
  };

  onReceivedNewList = (movieList) => {
    this.setState({
      movieList,
    });
  };

  onLiked = (id) => {
    this.state.likedList.push(id);
  };

  onUnliked = (id) => {
    let {likedList} = this.state;
    likedList = likedList.filter(movieId => movieId !== id);
    this.setState({
      likedList,
    });
  };

  render() {
    const { movieList, genreList, likedList } = this.state;

    return (
      <div>
        <div className="genres">
          {genreList.map((genre) => <Genre genre={genre} onReceivedNewList={this.onReceivedNewList}  />)}
        </div>
        <div className="cards">
          {movieList.map((movie) => <Card movie={movie} likedList={likedList} onLiked={this.onLiked} onUnliked={this.onUnliked} />)}
        </div>

      </div>
    );
  }
}
