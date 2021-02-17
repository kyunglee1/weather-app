/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import ShowFiltersButton from '../ShowFiltersButton/index';
import SearchBar from '../SearchBar/index';
import SearchFilterTable from '../SearchFilterTable/index';
import WeatherTable from '../WeatherTable/index';
import setLocation from '../../actions/setLocation';
import toggleFilter from '../../actions/toggleFilter';
import './index.css';

const App = (props) => {
  // const [city, setCity] = useState('');
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
    props.setLocation(input);
    setHasClickedSearch(false);
  };

  const handleSearchClick = () => {
    setHasClickedSearch(true);
  };

  const handleShowFiltersClick = () => {
    setHasClickedShowFilters((prev) => !prev);
  };

  const handleFilterChange = (e) => {
    const filter = e.target;
    props.toggleFilter(filter);
  };

  return (
    <div id="container">
      <SearchBar
        onInputChange={handleInputChange}
        onSearchClick={handleSearchClick}
      />
      <ShowFiltersButton onShowFiltersClick={handleShowFiltersClick} />
      {hasClickedShowFilters && (
        <SearchFilterTable onFilterChange={handleFilterChange} />
      )}
      {hasClickedSearch && <WeatherTable />}
    </div>
  );
};

// Should checkbox be hooked to store?
// Should city in SearchBar be hooked to store? Or, do we hook the city variable inside SearchBar to store and then use it from WeatherTable?

const mapDispatchToProps = (dispatch) => ({
  setLocation: (location) => dispatch(setLocation(location)),
  toggleFilter: (filter) => dispatch(toggleFilter(filter)),
});

export default connect(null, mapDispatchToProps)(App);
