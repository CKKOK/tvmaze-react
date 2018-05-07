import React from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './style.scss';
import SearchResult from '../searchresult/searchresult';

function Results(props) {
  const searchResultsListItems = props.searchResults.map((item) => {
    return <SearchResult url={item.show.url} imgurl={item.show.image.medium} name={item.show.name} summary={item.show.summary} />
    }
  );

  return (
    <div className={styles.resultsPanel}>
      <Button bsStyle="primary" className={styles.backButton} onClick={props.viewToggler}>
        Back to Search
      </Button>
      <div className={styles.resultsContainer}>{searchResultsListItems}</div>
    </div>
  );
}

Results.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  viewToggler: PropTypes.func.isRequired
}
export default Results;
