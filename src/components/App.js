import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import { getMovies } from '../thunks';


class App extends React.Component {
  constructor(props) {
    super(props);

    props.onGetMovies();

  }


  render() {
    const { movieList } = this.props;
    const { hearted } = this.props;

    console.log("On Api.js render1 " + this.props);
    console.log("On Api.js render " + movieList);
    console.log( "on App.js hearted " + hearted);
    return (

      <React.Fragment>
        <Genres />

        <div className="cards">
          {movieList.map((movie) => (
            <Card
              key={movie.id}
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
  //todo: review below
  // function to get data from redux store to this components props
  // (state) => {
  //   return {
  //     movieList: state.movies.list,
  //   };
  // },
  ({ movies: { list } }) => ({
    movieList: list
  }),


  // function to pass action callers to this components props
  (dispatch) => {
    return {
      // onSetMovies - simplest way to pass data to store
      onSetMovies: (movies) => dispatch(setMovies(movies)),
      onGetMovies: () => dispatch(getMovies()),
    };
  },
)(App);
