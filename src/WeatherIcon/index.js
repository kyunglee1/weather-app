/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function WeatherIcon({ type }) {
  const url = `https://openweathermap.org/img/wn/${type}@2x.png`;
  return <img src={url} alt="Weather Icon" />;
}
