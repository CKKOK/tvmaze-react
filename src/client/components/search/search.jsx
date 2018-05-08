import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import styles from './style.scss';

const urlRoot = 'http://api.tvmaze.com/search/shows?q=';

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
    let query = this.state.query,
        url = null;
    if (this.state.query != '') {
      url = urlRoot + encodeURIComponent(query);
      this.setState({query: ''});
    } else {
      url = 'http://api.tvmaze.com/shows?page=1';
    };
    fetch(url)
        .then((response) => response.json())
        .then((data) => this.props.searchResultHandler(data, query));
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
          <Button bsStyle="primary" onClick={this.searchSubmit}>
            Search
          </Button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  searchResultHandler: PropTypes.func.isRequired
};

export default Search;
