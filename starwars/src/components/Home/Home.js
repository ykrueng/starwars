import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Home = props => {
  return (
    <MovieWrapper>
      <h1>Star Wars Fan Page</h1>
      <Movies>
        {
          props.movies.map(movie => (
            <Link key={movie.episode_id} to={`/movies/${movie.episode_id}`}>
              <MovieCard key={movie.episode_id} movie={movie}/>
            </Link>
          ))
        }
      </Movies>
    </MovieWrapper>
  );
}
 
export default Home;