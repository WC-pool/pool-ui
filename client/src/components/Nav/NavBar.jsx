import 'babel-polyfill';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NavBar extends React.Component {
  constructor() {
    super()

    
  }
  componentDidMount () {
    console.log('apikey', process.env.FIREBASE_API_KEY)
  }

  render() {
    return (<h4>NavBar</h4>)
  }
}

export default NavBar;