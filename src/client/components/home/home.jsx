import React from 'react';
import {Switch,Route,Link,withRouter,Redirect} from 'react-router-dom';
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
    }, () => {this.props.history.push('/results')});
  }

  changeView(view) {
    this.setState({
      view
    });
    switch(view) {
      case SEARCH:
        this.props.history.push('/search');
        break;
      case RESULTS:
        this.props.history.push('/results');
        break;
    };
  }

  render() {
    return (
      <div className={styles.home}>
        <div className={styles.title}>TVMaze React</div>
        <Switch>
          <Route
            path='/results'
            render={()=>(
              <Results
                viewToggler={() => {
                  this.changeView(SEARCH);
                }}
                query={this.state.query}
                searchResults={this.state.results}
              />
            )}
          />
          <Route
            path='/'
            render={()=>(
              <Search searchResultHandler={this.handleSearchResults} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Home);
