/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';

export default function SearchBar({ value, onInputChange, onSearchClick }) {
  const handleChange = (e) => {
    onInputChange(e);
  };
  const handleClick = () => {
    onSearchClick();
  };
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>search</button>
    </>
  );
}
