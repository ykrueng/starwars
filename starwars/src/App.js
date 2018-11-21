import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Home from './components/Home/Home';
import MoviePage from './components/MoviePage/MoviePage';

import './App.css';

class App extends Component {
  _isMounted = false;
  
  constructor() {
    super();
    this.state = {
      movies: [],
      links: {},
    }
  }

  componentDidMount() {
    this._isMounted= true;
    fetch('https://swapi.co/api/films/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this._isMounted &&
        this.setState({
          movies: data.results.sort((movie1, movie2) => (
            movie1.episode_id - movie2.episode_id
          )),
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {movies} = this.state;
    return (
      <div className="App">
        <NavLink className="navlink" key={'home'} to="/">Home</NavLink>
        {
          movies.map(movie => (
            <NavLink className="navlink" key={movie.episode_id} to={`/movies/${movie.episode_id}`}>{movie.title}</NavLink>
          ))
        }
        <Route exact path="/" render={props => (
          <Home {...props} movies={movies} />
        )} />
        <Route path="/movies/:id" render={props => (
          <MoviePage {...props} movies={movies} />
        )}/>
      </div>
    );
  }
}

export default App;
