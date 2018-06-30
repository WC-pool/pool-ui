import 'babel-polyfill'
import React from 'react';
import { googleProvider } from '../../lib.js';
import axios from 'axios';
import url from '../../config';
import firebase from '../../lib.js';


class Login extends React.Component {
  constructor () {
    super()
  }

  onSuccess() {
    this.props.history.push('/');
    window.location.reload(true);
  }

  async onGoogleClickHandler(e) {
    e.preventDefault();
    try {
      const authData = await firebase.auth().signInWithPopup(googleProvider)
      await localStorage.setItem('activeUid', authData.user.uid);
      console.log('AUTHDATA', authData)
      let payload = {
        name: authData.user.displayName,
        email: authData.user.email,
        uid: authData.user.uid,
        image: authData.user.photoURL
      }
      try {
        const data = await axios.post(`${url.restServer}/api/auth/signup`, payload)
        try {
           const userData = await axios.get(`${url.restServer}/api/users/getUser`, {params: {uid: localStorage.getItem('activeUid')}})
           console.log('dAta', data)
           await localStorage.setItem('activeUid', userData.data.rows[0].uid)
           //await localStorage.setItem('activeId', data.data.rows[0].id)
           await localStorage.setItem('name', userData.data.rows[0].name)
           await localStorage.setItem('email', userData.data.rows[0].email)
           //sawait localStorage.setItem('accountType', data.data.rows[0].type)
           await localStorage.setItem('profilePictureURL', userData.data.rows[0].image)
//await this.props.setActiveUser(data.data.rows[0])
  //         await this.props.setUserData(data.data.rows[0])
           setTimeout(()=>{this.onSuccess()}, 2000)
        } catch (err) {
          console.log('error...', err)
        }
      } catch (err) {
        console.log('Error saving Google user to sql db. Err: ', err)
      }
    } catch (err) {
      console.log('Error signing in Google user with Firebase. Err: ', err.message)
    }
  }



  render () {
    return (<div>
      <div>
        <h4>Login</h4>
      </div>
      <div>{console.log('url', url.restServer)}</div>
      <div>
        <button onClick={this.onGoogleClickHandler.bind(this)}>Google</button>
      </div>
    </div>)
  }
}

export default Login;