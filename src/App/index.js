/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import SearchBar from '../SearchBar/index';
import WeatherTable from '../WeatherTable/index';
import './index.css';

function App() {
  return (
    <div>
      <SearchBar />
      <WeatherTable />
    </div>
  );
}

export default App;
