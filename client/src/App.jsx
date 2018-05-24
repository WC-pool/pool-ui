import React from 'react';
import axios from 'axios'; 
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import firebase from './lib.js';
import NavBar from '../src/components/Nav/NavBar';
import Login from '../src/components/Auth/Login';
import Signup from '../src/components/Auth/Signup';
import News from '../src/components/News/News';
import Picks from '../src/components/Picks/Picks';
import setPicks from '../src/components/Picks/setPicks';
import Chat from '../src/components/Chat/Chat';
import Home from '../src/components/Home/Home';

class App extends React.Component {
  constructor (props) {
    super (props)
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          
        } else {
          localStorage.clear(); 
        }
      } catch (err) {
        console.log('Error', err)
      }
    });      
  } 

  render() {
    return(
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div>
            <Route path="/" component={NavBar}  />
            <Switch>
            <Route path="/login" component={Login} />
            <Route path="signup" component={Signup} />
            <Route path="/news" component={News} />
            <Route path="/picks" component={Picks} />
            <Route path="/chat" component={Chat} />
            <Route path="/setPicks" component={setPicks} />
            <Route path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }


}



export default App;