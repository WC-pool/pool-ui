import 'babel-polyfill';
import React from 'react';
import axios from 'axios';
import url from '../../config';
import io from 'socket.io-client';


class Chat extends React.Component {
  constructor() {
    super()
    
    this.state = {
      socket: null,
      messages: [],
      author: null,
      message: ''
    }
  }

  async componentWillMount () {

    const socket = io(`${url.socketServer}`);

    this.setState({socket: socket});

    try {
      const data = await axios.get(`${url.socketServer}/api/chat/getMessages`);
    } catch (err) {
      console.log('Error getting messages', err);
    }


  }

  sendMessage (e) {
    e.preventDefault();
    
  }

  render() {
   return (<div>
    <h4>Chat</h4>
    {console.log('sockit to me',this.state.socket)}
    </div>)
  }
}
export default Chat;