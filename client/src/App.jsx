import React from 'react';
import axios from 'axios'; 
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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



import firebase from './lib.js';