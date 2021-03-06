import 'babel-polyfill';
import React from 'react';
import axios from 'axios';
import url from '../../config';
import io from 'socket.io-client';
import MessageEntry from './MessageEntry';
import './Chat.css';


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

    const socket = io(`${url.socketServer}`)

    this.setState({socket: socket});    

    try {
      const data = await axios.get(`${url.socketServer}/api/chat/getMessages`);
      console.log('mezzages', data.data)
      
      let chatBox = document.getElementById('chat-messages');
      chatBox.scrollTop = chatBox.scrollHeight;

      try {
        await this.setState({
          messages: data.data.reverse()
        })
      } catch (err) {
        console.log('couldnt set state - messages: ', err);
      }

    } catch (err) {
      console.log('Error getting messages', err);
    }

    socket.on('connect', () => {
      socket.emit('client.ready')
    })

    socket.on('server.initialState', () => {
      this.setState({socket});
    })

    socket.on('server.message', async (data) => {
      try {
        const lastmessage = await axios.get(`${url.socketServer}/api/chat/getLastMessage`)
         this.setState({
          messages: [...this.state.messages, lastmessage.data[0]]
        })
        
        let chatBox = document.getElementById('chat-messages');
        chatBox.scrollTop = chatBox.scrollHeight;
      }
      catch (err) {
        console.log('couldnt get last message', err)
      }
    })

    let chatBox = document.getElementById('chat-messages');
    chatBox.scrollTop = chatBox.scrollHeight;


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
    <h4>Message Board</h4>
    <div className='chat-messages' id='chat-messages'>
      <ul>
        {!this.state.messages > 0 ? null : 
        this.state.messages.map((message, i, userId, userName) => {
          return <MessageEntry key={i} message={message} userId={userId} userName={userName} />
          })
        }
      </ul>
    </div>
    <div className='chatinput'>
    <input type='text' placeholder='Talk Smack!' onChange={e => this.setState({message: e.target.value})}/>
    <button onClick={(e) => this.sendMessage(e)}>Send</button>
    </div>
    {console.log('sockit to me',this.state.socket)}
    </div>)
  }
}
export default Chat;