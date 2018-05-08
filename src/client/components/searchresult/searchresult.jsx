import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class SearchResult extends React.Component {
  render () {
    return (
      <div className={styles.searchResultItem}>
        <a href={this.props.url}>
          <img src={this.props.imgurl} alt={this.props.name} />
          <br />
          {this.props.name}
          <br />
        </a>
        <p className={styles.details}>{this.props.summary}</p>
      </div>
    );
  }
}

SearchResult.propTypes = {
  url: PropTypes.string.isRequired,
  imgurl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
};

export default SearchResult;
