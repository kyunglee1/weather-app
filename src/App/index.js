/* eslint-disable no-alert */
// °
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import SearchBar from '../SearchBar/index';
import SearchFilterTable from '../SearchFilterTable/index';
import WeatherTable from '../WeatherTable/index';
import './index.css';

export default function App() {
  const [city, setCity] = useState('');
  const [hasClickedSearch, setHasClickedSearch] = useState(false);
  const handleInputChange = (e) => {
    const input = e.target.value;
    setCity(input);
    setHasClickedSearch(false);
  };
  const handleSearchClick = () => {
    setHasClickedSearch(true);
  };

  return (
    <div>
      <SearchBar
        value={city}
        onInputChange={handleInputChange}
        onSearchClick={handleSearchClick}
      />
      <SearchFilterTable />
      {hasClickedSearch && <WeatherTable location={city} />}
    </div>
  );
}
