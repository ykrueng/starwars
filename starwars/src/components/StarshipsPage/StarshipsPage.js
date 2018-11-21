import React from 'react';

import Starship from './Starship';

import { Wrapper } from '../StyledHelper/styled';

class StarshipsPage extends React.Component{
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      starships: [],
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.starships.map(
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
          starships: [...prevState.starships, data],
        }));
      })
  }

  render() {
    return (
      !this.state.starships?
      null:
      <Wrapper>
        {
          this.state.starships.map(
            starship => <Starship key={starship.name} starship={starship}/>
          )
        }
      </Wrapper>
    );
  }
}

  export default StarshipsPage;