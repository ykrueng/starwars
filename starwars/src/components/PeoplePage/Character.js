import React from 'react';

import { CardWrapper } from '../StyledHelper/styled'

const Character = props => {
  const {char} = props;
  return (
    <CardWrapper>
      <h4>{char.name}</h4>
      <p>Gender: {char.gender}</p>
      <p>Birth Year: {char.birth_year}</p>
    </CardWrapper>
  );
}
 
export default Character;