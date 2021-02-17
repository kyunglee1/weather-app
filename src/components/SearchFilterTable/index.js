/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import toggleFilter from '../../actions/toggleFilter';
import './index.css';

const SearchFilterTable = (props) => (
  <table className="search-filter-table">
    <tbody>
      <tr>
        <td>
          <input
            name="visibility"
            type="checkbox"
            checked={props.filters.visibility}
            onChange={props.toggleFilter}
          />
          Visibility
        </td>
        <td>
          <input
            name="wind"
            type="checkbox"
            checked={props.filters.wind}
            onChange={props.toggleFilter}
          />
          Wind Speed
        </td>
      </tr>
      <tr>
        <td>
          <input
            name="humidity"
            type="checkbox"
            checked={props.filters.humidity}
            onChange={props.toggleFilter}
          />
          Humidity
        </td>
        <td>
          <input
            name="feelsLike"
            type="checkbox"
            checked={props.filters.feelsLike}
            onChange={props.toggleFilter}
          />
          Feels-Like
        </td>
      </tr>
    </tbody>
  </table>
);

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFilter: (filter) => dispatch(toggleFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilterTable);
