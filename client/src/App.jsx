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

  } 

  render() {
    return(
      <Provider store={this.props.store}>
      
      </Provider>
    )
  }


}



import firebase from './lib.js';