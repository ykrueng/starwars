import React from 'react';

import { Wrapper } from '../StyledHelper/styled';

import Vehicle from './Vehicle';

class VehiclesPage extends React.Component{
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.vehicles.map(
      char => this.getCharacter(char)
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getCharacter(URL) {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this._isMounted &&
        this.setState(prevState => ({
          vehicles: [...prevState.vehicles, data],
        }));
      })
  }

  render() {
    return (
      !this.state.vehicles?
      null:
      <Wrapper>
        {
          this.state.vehicles.map(
            vehicle => <Vehicle key={vehicle.name} vehicle={vehicle}/>
          )
        }
      </Wrapper>
    );
  }
}

  export default VehiclesPage;