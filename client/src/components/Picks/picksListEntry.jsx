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
      {console.log(this.props.set)}
      </div>
    )
  }
}


export default picksListEntry;