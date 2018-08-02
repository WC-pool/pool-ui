import 'babel-polyfill';
import React from 'react';
import axios from 'axios';

class MessageEntry extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    const { message } = this.props;
    return (
      localStorage.getItem('activeUid') !== message.userId ?
      <li>
        <div >
          <div>
            <p>{message.userName}</p>
          </div>
          <div>
            <p>{message.message}</p>
          </div>
        </div>
      </li>
      :
      <li>
        <div >
          <div>
            <p>{message.userName}</p>
          </div>
          <div>
            <p>{message.message}</p>
          </div>
        </div>
      </li>
    )
  }
};

export default MessageEntry;
