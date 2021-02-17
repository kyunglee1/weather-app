/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const WeatherFieldRow = ({ fieldName, fieldData }) => (
  <tr>
    <td>{fieldName}</td>
    <td>{fieldData}</td>
  </tr>
);

export default WeatherFieldRow;
