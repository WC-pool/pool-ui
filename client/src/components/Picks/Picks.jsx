import 'babel-polyfill';
import React from 'react';
import { Link } from 'react-router-dom';
import Groups from './WCgroups.jsx';
import axios from 'axios';
import url from '../../config';
import PicksList from './picksList.jsx';

class Picks extends React.Component {
  constructor() {
    super()

    this.state = {
      picksArr: null
    }
  }

  async componentWillMount () {
    let allPicks = await axios.get(`${url.restServer}/api/picks/getAll`);
    
    this.setState({picksArr: allPicks});
  }

  render () {
    return (
      <div>
       {console.log('mandy MOORE', this.state.picksArr)}
      <h4>World Cup Groups</h4>
        
        <Link to='/setPicks'><button>Create Picks</button></Link>
        <a href='#picks'><button>See All Picks</button></a>
        <br />
        
        <Groups />
        <div id='picks'>
        <h4>ALL PICKS</h4>
        <PicksList list={this.state.picksArr}/>
        </div>
      </div>
    )
  }
}

export default Picks;