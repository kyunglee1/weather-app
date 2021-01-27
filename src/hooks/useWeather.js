import { useState, useEffect } from 'react';

const useWeather = (location) => {
  const [weather, setWeather] = useState({
    temperature: '---',
    tempMax: '--',
    tempMin: '--',
    description: '',
    icon: '',
    advanced: {
      feelsLike: '',
      humidity: '',
      wind: '',
      visibility: '',
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `//api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=df8f43f7523fec63b2b7896097360962`
      );
      if (!res.ok) {
        throw new Error('Bad response from server.');
      }
      const data = await res.json();
      return data;
    };

    fetchData()
      .then((data) => {
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
      })
      .catch(() => {
        setWeather((prev) => ({ ...prev, temperature: 'N/A' }));
      });
  }, [location]);

  return weather;
};

export default useWeather;
