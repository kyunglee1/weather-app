/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import WeatherIcon from '../WeatherIcon/index';

export default function WeatherTable({ location, filters }) {
  const [weather, setWeather] = useState({
    temperature: '---',
    description: '',
    icon: '',
    feelsLike: '',
    advanced: {
      tempMax: '',
      tempMin: '',
      humidity: '',
      wind: '',
      visibility: '',
    },
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
      const feelsLike = data.main.feels_like;
      const tempMax = Math.round(data.main.temp_max);
      const tempMin = Math.round(data.main.temp_min);
      const { humidity } = data.main;
      const { visibility } = data;
      const wind = Math.round(data.wind.speed);

      setWeather({
        temperature,
        description,
        icon,
        feelsLike,
        advanced: {
          tempMax,
          tempMin,
          humidity,
          visibility,
          wind,
        },
      });
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
          <td>{weather.feelsLike}</td>
        </tr>
        {filters.minmax && (
          <tr>
            <td>HI</td>
            <td>{weather.advanced.tempMax}</td>
          </tr>
        )}
        {filters.minmax && (
          <tr>
            <td>LO</td>
            <td>{weather.advanced.tempMin}</td>
          </tr>
        )}
        {filters.wind && (
          <tr>
            <td>Wind Speed</td>
            <td>{weather.advanced.wind}</td>
          </tr>
        )}
        {filters.humidity && (
          <tr>
            <td>Humidity</td>
            <td>{weather.advanced.humidity}</td>
          </tr>
        )}
        {filters.visibility && (
          <tr>
            <td>Visibility</td>
            <td>{weather.advanced.visibility}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
