import 'babel-polyfill';
import React from 'react';
import { Link } from 'react-router-dom';
import Groups from './WCgroups.jsx';

class Picks extends React.Component {
  constructor() {
    super()
  }

  render () {
    return (
      <div>
       
      <h4>World Cup Groups</h4>
        
        <Link to='/setPicks'><button>Create Picks</button></Link>
        <br />
        
      <Groups />
      </div>
    )
  }
}

export default Picks;