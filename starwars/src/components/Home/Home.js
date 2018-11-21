import React from 'react';
import styled from 'styled-components';

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
          <MovieCard key={movie.episode_id} movie={movie}/>
        ))
      }
    </MovieWrapper>
  );
}
 
export default Home;