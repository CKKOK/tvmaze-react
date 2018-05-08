import React from 'react';

import styles from './style.scss';

import Search from '../search/search';
import Results from '../results/results';

const SEARCH = Symbol('Search view');
const RESULTS = Symbol('Results view');

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      view: SEARCH,
      query: '',
      page: 1,
      results: []
    };
    this.handleSearchResults = this.handleSearchResults.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  handleSearchResults(results, query) {
    this.setState({
      view: RESULTS,
      query,
      results
    });
  }

  changeView(view) {
    this.setState({
      view
    });
  }

  render() {
    return (
      <div className={styles.home}>
        <div className={styles.title}>TVMaze React</div>
        {this.state.view === SEARCH ? (
          <Search searchResultHandler={this.handleSearchResults} />
        ) : (
          <Results
            viewToggler={() => {
              this.changeView(SEARCH);
            }}
            query={this.state.query}
            searchResults={this.state.results}
          />
        )}
      </div>
    );
  }
}

export default Home;
