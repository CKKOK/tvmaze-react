import React from 'react';

import styles from './style.scss';

const urlRoot = 'http://api.tvmaze.com/search/shows?q=';

import { Button } from 'react-bootstrap';

class Search extends React.Component {
  constructor() {
    super();
    this.searchSubmit = this.searchSubmit.bind(this);
    this.state = {
      query: ''
    };
  }

  onChange(value) {
    this.setState({query: value});
  }

  searchSubmit(e) {
    e.preventDefault();
    const query = this.state.query;
    this.setState({query: ''});
    // Actually do the AJAX call here
    fetch(urlRoot + encodeURIComponent(query))
      .then((response) => response.json())
      .then((data) => this.props.searchResultHandler(data))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className={styles.searchContainer}>
        <form onSubmit={this.searchSubmit}>
          <input
            className={styles.searchInput}
            value={this.state.query}
            placeholder="Enter a Movie Title..."
            onChange={(e) => this.onChange(e.target.value)}
          />
          <br />
          <Button bsStyle="primary" onClick={this.searchSubmit}>Search</Button>
        </form>
      </div>
    );
  }
}

export default Search;
