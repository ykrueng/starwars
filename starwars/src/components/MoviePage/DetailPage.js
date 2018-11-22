import React from 'react';

import Character from '../Character/Character';
import Planet from '../Planet/Planet';
import Species from '../Species/Species';
import Starship from '../Starship/Starship';
import Vehicle from '../Vehicle/Vehicle';

import { Wrapper } from '../StyledHelper/styled';

class DetailPage extends React.Component{
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.urls.map(
      url => this.getData(url)
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getData(URL) {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this._isMounted &&
        this.setState(prevState => ({
          data: [...prevState.data, data],
        }));
      })
  }

  render() {
    return (
      !this.state.data?
      null:
      <Wrapper>
        {
          this.state.data.map(
            item => {
              switch (this.props.type) {
                case 'characters':
                  return <Character key={item.name} char={item}/>;
                case 'planets':
                  return <Planet key={item.name} planet={item}/>;
                case 'species':
                  return <Species key={item.name} species={item}/>;
                case 'starships':
                  return <Starship key={item.name} starship={item}/>;
                default:
                  return <Vehicle key={item.name} vehicle={item}/>;
              }
            }
          )
        }
      </Wrapper>
    );
  }
}

  export default DetailPage;