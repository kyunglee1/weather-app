/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import WeatherIcon from '../WeatherIcon/index';

export default function WeatherTable({ location }) {
  const [weather, setWeather] = useState({
    temperature: '---',
    description: '',
    icon: '',
  });
  useEffect(async () => {
    try {
      const res = await fetch(
        `//api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=df8f43f7523fec63b2b7896097360962`
      );
      const data = await res.json();
      const temperature = Math.round(data.main.temp);
      const { description } = data.weather[0];
      const { icon } = data.weather[0];
      setWeather((prev) => ({ ...prev, temperature, description, icon }));
    } catch (err) {
      alert(err);
      setWeather((prev) => ({ ...prev, temperature: 'N/A' }));
    }
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">{location.toUpperCase()}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{weather.temperature}</td>
          <td>
            <WeatherIcon type={weather.icon} />
            {weather.description}
          </td>
        </tr>
        <tr>
          <td>Feels like:</td>
          <td>{weather.description}</td>
        </tr>
      </tbody>
    </table>
  );
}
