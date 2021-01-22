/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function SearchFilterTable() {
  return (
    <table id="search-filter-table">
      <tbody>
        <tr>
          <td>
            <input name="visibility" type="checkbox" />
            Visibility
          </td>
          <td>
            <input name="wind" type="checkbox" />
            Wind Speed
          </td>
        </tr>
        <tr>
          <td>
            <input name="humidity" type="checkbox" />
            Humidity
          </td>
          <td>
            <input name="min/max" type="checkbox" />
            Temperature High/Low
          </td>
        </tr>
      </tbody>
    </table>
  );
}
