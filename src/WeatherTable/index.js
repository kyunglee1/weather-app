/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import WeatherFieldRow from '../WeatherFieldRow/index';
import WeatherIcon from '../WeatherIcon/index';

export default function WeatherTable({ location, filters }) {
  const [weather, setWeather] = useState({
    temperature: '---',
    tempMax: '',
    tempMin: '',
    description: '',
    icon: '',
    advanced: {
      feelsLike: '',
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
      const feelsLike = Math.round(data.main.feels_like);
      const tempMax = Math.round(data.main.temp_max);
      const tempMin = Math.round(data.main.temp_min);
      const { humidity } = data.main;
      const wind = Math.round(data.wind.speed);
      const { visibility } = data;

      setWeather({
        temperature,
        tempMax,
        tempMin,
        description,
        icon,
        advanced: {
          feelsLike,
          humidity,
          wind,
          visibility,
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
          <td>{`HI ${weather.tempMax}°`}</td>
          <td>{`LO ${weather.tempMin}°`}</td>
        </tr>
        {filters.feelsLike && (
          <WeatherFieldRow
            fieldName="Feels Like:"
            fieldData={`${weather.advanced.feelsLike}°`}
          />
        )}
        {filters.wind && (
          <WeatherFieldRow
            fieldName="Wind Speed"
            fieldData={`${weather.advanced.wind} mph`}
          />
        )}
        {filters.humidity && (
          <WeatherFieldRow
            fieldName="Humidity"
            fieldData={`${weather.advanced.humidity}%`}
          />
        )}
        {filters.visibility && (
          <WeatherFieldRow
            fieldName="Visibility"
            fieldData={`${weather.advanced.visibility} m`}
          />
        )}
      </tbody>
    </table>
  );
}
