/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import ShowFiltersButton from '../ShowFiltersButton/index';
import SearchBar from '../SearchBar/index';
import SearchFilterTable from '../SearchFilterTable/index';
import WeatherTable from '../WeatherTable/index';
import toggleFilter from '../../actions/toggleFilter';
import './index.css';

const App = (props) => {
  const [city, setCity] = useState('');
  const [hasClickedSearch, setHasClickedSearch] = useState(false);
  const [hasClickedShowFilters, setHasClickedShowFilters] = useState(false);
  // const [filters, setFilters] = useState({
  //   feelsLike: false,
  //   wind: false,
  //   humidity: false,
  //   visibility: false,
  // });

  const handleInputChange = (e) => {
    const input = e.target.value;
    setCity(input);
    setHasClickedSearch(false);
  };

  const handleSearchClick = () => {
    setHasClickedSearch(true);
  };

  const handleShowFiltersClick = () => {
    setHasClickedShowFilters((prev) => !prev);
  };

  const handleFilterChange = (e) => {
    props.toggleFilter(e.target);
  };

  return (
    <div id="container">
      <SearchBar
        inputText={city}
        onInputChange={handleInputChange}
        onSearchClick={handleSearchClick}
      />
      <ShowFiltersButton onShowFiltersClick={handleShowFiltersClick} />
      {hasClickedShowFilters && (
        <SearchFilterTable onFilterChange={handleFilterChange} />
      )}
      {hasClickedSearch && <WeatherTable location={city} />}
    </div>
  );
};

// Should checkbox be hooked to store?

const mapDispatchToProps = (dispatch) => ({
  toggleFilter: (filter) => dispatch(toggleFilter(filter)),
});

export default connect(null, mapDispatchToProps)(App);
