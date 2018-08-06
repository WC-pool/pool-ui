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
      <div className='home'>
        
        <br />
        <span>
        <div className='row centerbtns'>
        <div className='navbtn'><Link to='/news'><button type="button" className="btn btn-light btn-lg btn-block">News</button></Link></div>
        <div className='navbtn'><Link to='/picks'><button type="button" className="btn btn-primary btn-lg btn-block">Picks</button></Link></div>
        <div className='navbtn'><Link to='/chat'><button type="button" className="btn btn-danger btn-lg btn-block">Chat</button></Link></div>
        </div>
      </span>
        <div className='jumbotron jumbotron-fluid jumbo'>
          <div className='title container text-center'>
            <h1 className='display-4'>World Cup Pool 2018</h1>
          </div>
        </div>
        <br />
        
        <hr />
      </div>
    )
  }
}

export default Home;