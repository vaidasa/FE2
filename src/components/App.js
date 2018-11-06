import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Card from './Card';
import { endpoints } from '../../config';
import Genres from './Genres';
import { setMovies } from '../actions';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      hearted: [],
    };

    this.requestMovies();
  }

  requestMovies = () => {
    axios
      .get(endpoints.mostPopularMovies())
      .then((res) => this.props.onSetMovies(res.data.results))
      .catch((error) => console.log(error));
  };

  setMovieList = (movieList) => {
    this.setState({
      movieList,
    })
  };

  addHeart = (id) => {
    const { hearted } = this.state;

    this.setState({
      hearted: [ ...hearted, id ],
    })
  };

  removeHeart = (id) => {
    const { hearted } = this.state;

    this.setState({
      hearted: hearted.filter((currentId) => currentId !== id),
    })
  };

  render() {
    const { movieList } = this.props;
    const { hearted } = this.state;

    return (
      <React.Fragment>
        <Genres onChangeList={this.setMovieList} />

        <div className="cards">
          {movieList.map((movie) => (
            <Card
              key={movie.id}
              isHearted={hearted.includes(movie.id)}
              onAddHeart={() => this.addHeart(movie.id)}
              onRemoveHeart={() => this.removeHeart(movie.id)}
              movie={movie}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  (state) => {
    return {
      movieList: state.movies.list,
    };
  },
  (dispatch) => {
    return {
      onSetMovies: (movies) => dispatch(setMovies(movies)),
    };
  },
)(App);
