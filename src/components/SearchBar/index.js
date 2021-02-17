/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { connect } from 'react-redux';
import './index.css';

const SearchBar = (props) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.onSearchClick();
    }
  };

  return (
    <div className="search-input">
      <input
        type="text"
        value={props.inputText}
        onChange={props.onInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={props.onSearchClick} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  inputText: state.location,
});

export default connect(mapStateToProps)(SearchBar);
