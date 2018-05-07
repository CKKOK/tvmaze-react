import React from 'react';
import {hot} from 'react-hot-loader';

import Home from './components/home/home';
import Search from './components/search/search';
import Results from './components/results/results';
import SearchResult from './components/searchresult/searchresult';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <Home />
    );
  }
}

export default hot(module)(App);
