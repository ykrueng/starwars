import React from 'react';

import Planet from './Planet';

import { Wrapper } from '../StyledHelper/styled';

class PlanetsPage extends React.Component{
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.planets.map(
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
          planets: [...prevState.planets, data],
        }));
      })
  }

  render() {
    return (
      !this.state.planets?
      null:
      <Wrapper>
        {
          this.state.planets.map(
            planet => <Planet key={planet.name} planet={planet} />
          )
        }
      </Wrapper>
    );
  }
}

  export default PlanetsPage;