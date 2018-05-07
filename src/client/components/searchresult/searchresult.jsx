import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

function SearchResult(props) {
  return (
    <div className={styles.searchResultItem}>
      <a href={props.url}>
        <img src={props.imgurl} alt={props.name} />
        <br />
        {props.name}
        <br />
      </a>
      <p className={styles.details}>{props.summary}</p>
    </div>
  );
}

SearchResult.propTypes = {
  url: PropTypes.string.isRequired,
  imgurl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
};

export default SearchResult;
