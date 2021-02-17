/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import useWeather from '../../hooks/useWeather';
import WeatherFieldRow from '../WeatherFieldRow/index';
import WeatherIcon from '../WeatherIcon/index';
import './index.css';

const WeatherTable = ({ location, filters }) => {
  const weather = useWeather(location);
  return (
    <div className="table-wrapper">
      <table className="weather-table">
        <thead>
          <tr>
            <th colSpan="2">{location.toUpperCase()}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="temperature-td">{`${weather.temperature}°`}</td>
            <td>
              <div id="icon-td">
                <WeatherIcon type={weather.icon} />
                {weather.description}
              </div>
            </td>
          </tr>
          <tr>
            <td>{`HI ${weather.tempMax}°`}</td>
            <td>{`LO ${weather.tempMin}°`}</td>
          </tr>
          {filters.feelsLike && (
            <WeatherFieldRow
              fieldName="Feels Like"
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  location: state.location,
  filters: state.filters,
});

export default connect(mapStateToProps)(WeatherTable);
