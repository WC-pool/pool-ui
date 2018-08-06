import 'babel-polyfill';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Chat from '../Chat/Chat.jsx';
import News from '../News/News.jsx';
import Picks from '../Picks/Picks.jsx';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props)

 
  }


  render() {
    return (
      <div>
        <h4>Welcome, {localStorage.getItem('name')}</h4>
        <br />
        <div className='jumbo'>
          <div className='title containers text-center'>
            <h1>World Cup Pool 2018</h1>
          </div>
        </div>
        <br />
        <span>
          <Link to='/news'><button>News</button></Link>
          <Link to='/picks'><button>Picks</button></Link>
          <Link to='/chat'><button>Chat</button></Link>

        </span>
        <hr />
      </div>
    )
  }
}

export default Home;