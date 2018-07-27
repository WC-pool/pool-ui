import 'babel-polyfill';
import React from 'react';
import axios from 'axios';
import url from '../../config';
import io from 'socket.io-client';
import { MessageEntry } from './MessageEntry';


class Chat extends React.Component {
  constructor() {
    super()
    
    this.state = {
      socket: null,
      messages: [],
      author: null,
      message: ''
    }
    this.sendMessage = this.sendMessage.bind(this);   
  }

  async componentWillMount () {

    const socket = io(`${url.socketServer}`);

    this.setState({socket: socket});    

    try {
      const data = await axios.get(`${url.socketServer}/api/chat/getMessages`);
      console.log('the mezzages', data)
    } catch (err) {
      console.log('Error getting messages', err);
    }

    socket.on('connect', () => {
      socket.emit('client.ready')
    })

    socket.on('server.initialState', () => {
      this.setState({socket});
    })


  }

  sendMessage (e) {
    e.preventDefault();

    this.state.socket.emit('client.message', {
      userName: localStorage.getItem('name'),
      message: this.state.message,
      userId: localStorage.getItem('activeUid')
    })

    this.setState({message: ''});
    
  }

  render() {
   return (<div>
    <h4>Chat</h4>
    <div>
    
    </div>
    <div>
    <input type='text' placeholder='Talk Smack!' onChange={e => this.setState({message: e.target.value})}/>
    <button onClick={(e) => this.sendMessage(e)}>Send</button>
    </div>
    {console.log('sockit to me',this.state.socket)}
    </div>)
  }
}
export default Chat;