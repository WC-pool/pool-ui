import 'babel-polyfill';
import React from 'react';
import { Link } from 'react-router-dom';


class picksListEntry extends React.Component {
  constructor (props) {
    super (props)

  }


  render () {
    return (
      <div>
      
      <div>User: {this.props.set.pickername}</div>
      <div>Picks name: {this.props.set.name}</div>
    
      <hr />
      </div>
    )
  }
}


export default picksListEntry;