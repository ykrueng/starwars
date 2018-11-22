import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MovieCard from './MovieCard';

const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 30px auto;
`;

const Home = props => {
  return (
    <MovieWrapper className="movies">
      {
        props.movies.map(movie => (
          <Link to={`/movies/${movie.episode_id}`}>
            <MovieCard key={movie.episode_id} movie={movie}/>
          </Link>
        ))
      }
    </MovieWrapper>
  );
}
 
export default Home;