import React from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './style.scss';
import SearchResult from '../searchresult/searchresult';

const urlRoot = 'http://api.tvmaze.com/shows?page=';
const defaultImage = 'https://www.wakesmiles.org/wp-content/uploads/2017/10/placeholder-2.png';
const defaultURL = 'http://localhost:3000';
const defaultName = 'Movie';
const defaultSummary = 'Summary';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewToggler: props.viewToggler,
      query: props.query,
      page: props.query ? 0 : 1,
      fetching: false, // used as a check to prevent multiple AJAX calls from emitting due to the onScroll event firing multiple times a second
      searchResults: props.searchResults
    };
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  };

  addResults(data) {
    let currentResults = this.state.searchResults, page = this.state.page;
    currentResults = currentResults.concat(data);
    page++;
    this.setState({
      searchResults: currentResults,
      fetching: false,
      page
    });
  };
  onScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !this.state.fetching) {
      this.setState({fetching: true});
      fetch(urlRoot + (this.state.page + 1).toString())
        .then((response) => response.json())
        .then((data) => this.addResults(data));
    };
  };

  render(){
    let searchResultsListItems = null;
    if (this.state.query != '') {
      searchResultsListItems = this.state.searchResults.map((item) => {
        return <SearchResult url={item.show.url} imgurl={item.show.image.medium} name={item.show.name} summary={item.show.summary} />
        }
      );
    } else {
      searchResultsListItems = this.state.searchResults.map((item) => {
        console.log(item.id);
        let url = item.url || defaultURL,
            imgurl = (item.image ? item.image.medium : defaultImage),
            name = item.name || defaultName,
            summary = item.summary || defaultSummary;
        return <SearchResult url={url} imgurl={imgurl} name={name} summary={summary} />
      });
    };
  
    return (
      <div className={styles.resultsPanel}>
        <Button bsStyle="primary" className={styles.backButton} onClick={this.props.viewToggler}>
          Back to Search
        </Button>
        <div className={styles.resultsContainer}>{searchResultsListItems}</div>
      </div>
    );
  }
}

Results.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  viewToggler: PropTypes.func.isRequired
};

export default Results;
