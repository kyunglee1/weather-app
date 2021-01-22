/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function WeatherTable() {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">Weather</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Temp:</td>
          <td>Feels like:</td>
        </tr>
      </tbody>
    </table>
  );
}
