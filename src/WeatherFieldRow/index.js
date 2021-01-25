/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function WeatherFieldRow({ fieldName, fieldData }) {
  return (
    <tr>
      <td>{fieldName}</td>
      <td>{fieldData}</td>
    </tr>
  );
}
