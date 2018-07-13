import 'babel-polyfill';
import React from 'react';
import { Link } from 'react-router-dom';
import PicksListEntry from './picksListEntry.jsx';


class PicksList extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
  
  if (this.props.list === null) {
    return (<div>
          Loading Picks
        </div>)
  } else{
    return this.props.list.data.rows.map( set => {
      return (
        <div key={set.id} >
        <PicksListEntry set={set} />
       </div>
      )
    })

    } 
  }  
}


export default PicksList;