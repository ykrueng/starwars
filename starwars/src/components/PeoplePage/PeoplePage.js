import React from 'react';

import Character from './Character';

import { Wrapper } from '../StyledHelper/styled';

class PeoplePage extends React.Component{
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.characters.map(
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
          characters: [...prevState.characters, data],
        }));
      })
  }

  render() {
    return (
      !this.state.characters?
      null:
      <Wrapper>
        {
          this.state.characters.map(
            char => <Character key={char.name} char={char}/>
          )
        }
      </Wrapper>
    );
  }
}

  export default PeoplePage;