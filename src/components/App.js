import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import { getMovies } from '../thunks';
import { setMovies } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hearted: [],
    };

    props.onGetMovies();
  }

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
      // onSetMovies - simplest way to pass data to store
      onSetMovies: (movies) => dispatch(setMovies(movies)),
      onGetMovies: () => dispatch(getMovies()),
    };
  },
)(App);
