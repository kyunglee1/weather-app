/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';

const ShowFiltersButton = ({ onShowFiltersClick }) => (
  <button className="show-filters-button" onClick={onShowFiltersClick} />
);

export default ShowFiltersButton;
