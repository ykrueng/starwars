import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const CardWrapper = styled.div`
  min-width: 25rem;
  margin: 1rem;
  border-radius: 1rem;
  border: 1px solid #AA9582;
  box-shadow: 2px 2px 10px #AA9582;
  background-color: #343A45;
  padding: 1rem;
  transition: all .3s;

  h3 {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  &:hover {
    transform: translateY(-.5rem);
    box-shadow: 0 0 10px #AA9582;
    background-color: #AA9582;
  }

  &:active {
    transform: translateY(-.3rem);
  }

  p {
    margin-bottom: .5rem;
  }
`;

const MovieCard = props => {
  const {movie} = props;
  return (
    <CardWrapper>
      <h3>{movie.title}</h3>
      <p>{moment(movie.release_date).format('MMM Do, YYYY')}</p>
      <p>Episode: {movie.episode_id}</p>
    </CardWrapper>
  );
}

export default MovieCard;