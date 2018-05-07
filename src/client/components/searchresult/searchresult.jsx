import React from 'react';

import styles from './style.scss';

class SearchResult extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={styles.searchResultItem}>
        <a href={this.props.url}>
          <img src={this.props.imgurl}/><br />
          {this.props.name}<br />
        </a>
        <p className={styles.details}>{this.props.summary}</p>
      </div>
    );
  }
}

export default SearchResult;
