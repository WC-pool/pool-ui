import 'babel-polyfill';
import React from 'react';


class PicksList extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div>
      {console.log('nationWIDE', this.props.list)}
      </div>
    )
  }
}

export default PicksList;