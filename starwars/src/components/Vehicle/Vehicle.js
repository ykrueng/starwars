import React from 'react';

import { CardWrapper } from '../StyledHelper/styled'

const Vehicle = props => {
  const {vehicle} = props;
  return (
    <CardWrapper>
      <h4>{vehicle.name}</h4>
      <p>Model: {vehicle.model}</p>
    </CardWrapper>
  );
}
 
export default Vehicle;