import React from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';

import DetailPage from './DetailPage';

const PageWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;

  .movie--dir {
    text-align: left;
    margin: 20px 0 40px 0;
  }

  .links--container {
    text-align: left;
  }
`;

const MoviePage = props => {
  const id = props.match.params.id;
  const movie = props.movies.find(movie => `${movie.episode_id}` === id);
  const links = ['characters', 'species', 'planets', 'vehicles', 'starships'];

  return (
    !movie ?
    null :
    <PageWrapper>
      <div>
        <h4>{movie.title.toUpperCase()}</h4>
        <p>{movie.release_date}</p>
        <p>Episode:</p>
        <p>{movie.episode_id}</p>
        <p>{movie.opening_crawl}</p>
      </div>
      <div className="movie--dir">
        <p>Director: {movie.director}</p>
        <p>Producer: {movie.producer}</p>
      </div>
      <div className="links--container">
        {links.map(link => (
          <NavLink className="navlink" key={link} to={`/movies/${id}/${link}`}>{link}</NavLink>
        ))}
      </div>
      {
        links.map(link => {
          return <Route
            exact path={`/movies/${id}/${link}`}
            key={id + link}
            render={props => {
              return <DetailPage
                {...props}
                urls={movie[link]}
                type={link}
              />
            }}
          />
      })
      }
    </PageWrapper>
  );
}
 
export default MoviePage;