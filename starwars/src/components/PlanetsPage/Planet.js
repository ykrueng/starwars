import React from 'react';

import { CardWrapper } from '../StyledHelper/styled'

const Planet = props => {
  const {planet} = props;
  return (
    <CardWrapper>
      <h4>{planet.name}</h4>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
    </CardWrapper>
  );
}
 
export default Planet;