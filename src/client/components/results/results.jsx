import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './style.scss';
import SearchResult from '../searchresult/searchresult';

class Results extends React.Component {
  render() {
    const searchResultsListItems = this.props.searchResults.map((item) => {
      return <SearchResult url={item.show.url} imgurl={item.show.image.medium} name={item.show.name} summary={item.show.summary}/>
    });

    return (
      <div className={styles.resultsPanel}>
        <Button bsStyle="primary" className={styles.backButton} onClick={this.props.viewToggler}>Back to Search</Button>
        <div className={styles.resultsContainer}>
          {searchResultsListItems}
        </div>
      </div>
    );
  }
}

export default Results;
