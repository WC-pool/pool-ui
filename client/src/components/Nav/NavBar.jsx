import 'babel-polyfill';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import url from '../../config';
import firebase from 'firebase';
import Home from '../Home/Home';

class NavBar extends React.Component {
  constructor() {
    super()

  this.onSuccess = this.onSuccess.bind(this);
  }
  componentDidMount () {
    
  }

  onSuccess() {
    this.props.history.push('/');
  }

  async onLogoutHandler() {
    try {
      const logout = await firebase.auth().signOut()
      localStorage.removeItem('activeUid');
      window.location.reload(true);
      this.props.history.push('/');
    } catch (err) {
      console.log('Error logging out');
    }
  }



  render() {
    return (
      <div>
      {
        !localStorage.getItem('activeUid') ?
        <div>
        <Link to='/login'><button>Login</button></Link>
        <p></p>
        <Link to='/signup'><button>Signup</button></Link>
        </div>
        :
        <div>
          <div>
          <button onClick={this.onLogoutHandler.bind(this)}>Logout</button>
          </div>
          <div>
          <Home />
          </div>
        </div>
      }
      </div>
    )
  }
}

export default NavBar;