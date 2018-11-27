import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import MovieCard from './MovieCard';


const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 30px auto;

  h1 {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 8rem;
    text-shadow: 2px 2px 100px #AA9582;
    margin: 3rem auto 4rem auto;
  }

  .movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  
    .fade-enter {
      opacity: 0.01;
    }
  
    .fade-enter-active {
      opacity: 1;
      transition: opacity 500ms ease-in;
    }
  
    .fade-exit {
      opacity: 1;
    }
  
    .fade-exit-active {
      opacity: 0.01;
      transition: opacity 500ms ease-in;
    }
  }
`;


const Home = props => {
  return (
    <MovieWrapper>
      <h1>Star Wars Fan Page</h1>
      <TransitionGroup className="movie-list">
        {
          props.movies.map(movie => (
            <CSSTransition
                key={movie.episode_id}
                timeout={2000}
                classNames="fade"
              >

              <Link key={movie.episode_id} to={`/movies/${movie.episode_id}`}>
                  <MovieCard key={movie.episode_id} movie={movie}/>
                </Link>
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    </MovieWrapper>
  );
}
 
export default Home;