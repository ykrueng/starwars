import React from 'react';

import { CardWrapper } from '../StyledHelper/styled'

const Starship = props => {
  const {starship} = props;
  return (
    <CardWrapper>
      <h4>{starship.name}</h4>
      <p>Class: {starship.starship_class}</p>
    </CardWrapper>
  );
}
 
export default Starship;