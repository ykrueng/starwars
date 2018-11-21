import React from 'react';

import Species from './Species';

import {Wrapper} from '../StyledHelper/styled';

class SpeciesPage extends React.Component{
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      species: [],
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.species.map(
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
          species: [...prevState.species, data],
        }));
      })
  }

  render() {
    return (
      !this.state.species?
      null:
      <Wrapper>
        {
          this.state.species.map(
            spec => <Species key={spec.name} species={spec} />
          )
        }
      </Wrapper>
    );
  }
}

  export default SpeciesPage;