import React from 'react';
import {hot} from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home/home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Home />;
  }
}

export default hot(module)(App);
