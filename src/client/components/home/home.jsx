import React from 'react';

import styles from './style.scss';

import Search from '../search/search';
import Results from '../results/results';
import SearchResult from '../searchresult/searchresult';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    return (
      <div className={styles.home}>
        Yo this is tvmaze
        <Search />
      </div>
    );
  }
}

export default Home;
