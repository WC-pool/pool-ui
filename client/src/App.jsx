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
      } catch(err) {
        console.log('Error', err)
      }
    });      
  } 

  render() {
    return(
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div>
            <Route path="/" component={}  />
            <Switch>
            <Route path="/login" component={} />

            <Route path="/news" component={} />
            <Route path="/picks" component={} />
            <Route path="/chat" component={} />

            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }


}



import firebase from './lib.js';