/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';

export default function WeatherTable({ location }) {
  const [temperature, setTemperature] = useState('---');
  useEffect(async () => {
    try {
      const res = await fetch(
        `//api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=df8f43f7523fec63b2b7896097360962`
      );
      const data = await res.json();
      const temp = Math.round(data.main.temp);
      setTemperature(temp);
    } catch (err) {
      alert(err);
      setTemperature('N/A');
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
          <td>{temperature}</td>
          <td>icon * description</td>
        </tr>
        <tr>
          <td>Feels like:</td>
          <td>...</td>
        </tr>
      </tbody>
    </table>
  );
}
