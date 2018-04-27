import React from 'react';
import { render } from 'react-dom';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';

import App from './App.jsx';
import './index.css';

const middleware = applyMiddleware(thunk, createLogger);
const store = createStore(reducers, middleware);

render(<App store={store} />, document.getElementById('app'))