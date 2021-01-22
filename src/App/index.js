/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import SearchBar from '../SearchBar/index';
import WeatherTable from '../WeatherTable/index';
import './index.css';

export default function App() {
  const [city, setCity] = useState('');
  const handleInputChange = (e) => {
    const input = e.target.value;
    setCity(input);
  };
  const handleSearchClick = async () => {
    try {
      const res = await fetch(
        `//api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=df8f43f7523fec63b2b7896097360962`
      );
      const data = await res.json();
      const temp = Math.round(data.main.temp);
      // eslint-disable-next-line prefer-template
      alert(temp + '°');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <SearchBar
        value={city}
        onInputChange={handleInputChange}
        onSearchClick={handleSearchClick}
      />
      <WeatherTable />
    </div>
  );
}
