import React from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';

import PeoplePage from '../PeoplePage/PeoplePage';
import SpeciesPage from '../SpeciesPage/SpeciesPage';
import PlanetsPage from '../PlanetsPage/PlanetsPage';
import VehiclesPage from '../VehiclesPage/VehiclesPage';
import StarshipsPage from '../StarshipsPage/StarshipsPage';

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
      <Route exact path={`/movies/${id}/characters`} render={props => (
        <PeoplePage {...props} characters={movie.characters} />
      )}/>
      <Route exact path={`/movies/${id}/species`} render={props => (
        <SpeciesPage {...props} species={movie.species} />
      )}/>
      <Route exact path={`/movies/${id}/planets`} render={props => (
        <PlanetsPage {...props} planets={movie.planets} />
      )}/>
      <Route exact path={`/movies/${id}/vehicles`} render={props => (
        <VehiclesPage {...props} vehicles={movie.vehicles} />
      )}/>
      <Route exact path={`/movies/${id}/starships`} render={props => (
        <StarshipsPage {...props} starships={movie.starships} />
      )}/>

    </PageWrapper>
  );
}
 
export default MoviePage;