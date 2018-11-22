import React from 'react';

import { CardWrapper } from '../StyledHelper/styled'

const Species = props => {
  const {species} = props;
  return (
    <CardWrapper>
      <h4>{species.name}</h4>
      <p>Language: {species.language}</p>
    </CardWrapper>
  );
}
 
export default Species;