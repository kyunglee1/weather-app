/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import './index.css';

export default function SearchBar(props) {
  const handleChange = (e) => {
    props.onInputChange(e);
  };
  const handleSearchClick = () => {
    props.onSearchClick();
  };
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
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearchClick} />
    </div>
  );
}
