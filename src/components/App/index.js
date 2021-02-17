/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import ShowFiltersButton from '../ShowFiltersButton/index';
import SearchBar from '../SearchBar/index';
import SearchFilterTable from '../SearchFilterTable/index';
import WeatherTable from '../WeatherTable/index';
import './index.css';

const App = () => {
  const [city, setCity] = useState('');
  const [hasClickedSearch, setHasClickedSearch] = useState(false);
  const [hasClickedShowFilters, setHasClickedShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    feelsLike: false,
    wind: false,
    humidity: false,
    visibility: false,
  });

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
    const { name } = e.target;
    const value = e.target.checked;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        <SearchFilterTable
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      )}
      {hasClickedSearch && <WeatherTable location={city} filters={filters} />}
    </div>
  );
};

export default App;