/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';

export default function SearchBar(props) {
  const handleChange = (e) => {
    props.onInputChange(e);
  };
  const handleSearchClick = () => {
    props.onSearchClick();
  };
  const handleShowFiltersClick = () => {
    props.onShowFiltersClick();
  };
  return (
    <>
      <input type="text" value={props.inputText} onChange={handleChange} />
      <button onClick={handleSearchClick}>search</button>
      <button onClick={handleShowFiltersClick}>Show Filters</button>
    </>
  );
}
