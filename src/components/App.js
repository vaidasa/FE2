import React from 'react';
import Card from './Card';
import axios from 'axios';
import { endpoints } from '../../config';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movieList: [],
    }
  }

  componentDidMount() {
    this.requestPopularMovies();
  }

  requestPopularMovies = () => {
    axios
      .get(endpoints.mostPopularMovies())
      .then((response) => {
        this.setState({
          movieList: response.data.results,
        });
      })
      .catch((error) => console.log(error.response));
  };

  render() {
    const { movieList } = this.state;

    return (
      <React.Fragment>
        {movieList.map((movie) => (
          <Card key={movie.id} data={movie} />
        ))}
      </React.Fragment>
    );
  }
}

export default App;
