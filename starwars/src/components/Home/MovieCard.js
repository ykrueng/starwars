import React from 'react';
import styled from 'styled-components';

const MovieCardWrapper = styled.div`
  width: 250px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid darkgray;
  background-color: lightgray;
`;

const MovieCard = props => {
  const {movie} = props;
  return (
    <MovieCardWrapper>
      <h3>{movie.title}</h3>
      <p>({movie.release_date})</p>
      <p>Episode: {movie.episode_id}</p>
    </MovieCardWrapper>
  );
}

export default MovieCard;