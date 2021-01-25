/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function SearchFilterTable({ filters, onFilterChange }) {
  return (
    <table id="search-filter-table">
      <tbody>
        <tr>
          <td>
            <input
              name="visibility"
              type="checkbox"
              checked={filters.visibility}
              onChange={onFilterChange}
            />
            Visibility
          </td>
          <td>
            <input
              name="wind"
              type="checkbox"
              checked={filters.wind}
              onChange={onFilterChange}
            />
            Wind Speed
          </td>
        </tr>
        <tr>
          <td>
            <input
              name="humidity"
              type="checkbox"
              checked={filters.humidity}
              onChange={onFilterChange}
            />
            Humidity
          </td>
          <td>
            <input
              name="feelsLike"
              type="checkbox"
              checked={filters.feelsLike}
              onChange={onFilterChange}
            />
            Feels-Like
          </td>
        </tr>
      </tbody>
    </table>
  );
}
