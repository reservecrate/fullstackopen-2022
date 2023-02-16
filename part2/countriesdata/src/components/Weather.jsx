import axios from 'axios';
import { useState, useEffect } from 'react';

const Weather = ({ capital }) => {
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    windSpeed: 0,
    humidity: 0
  });
  const hook = () => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=5f9b4633cf11453cbe0120519231302&q=${capital}`
      )
      .then(res => {
        const { data } = res;
        setWeatherData({
          ...weatherData,
          temperature: data.current.temp_c,
          windSpeed: data.current.wind_kph,
          humidity: data.current.humidity
        });
      });
  };
  useEffect(hook, []);
  return (
    <>
      <p>Temperature: {weatherData.temperature} C</p>
      <p>Wind: {weatherData.windSpeed} km/h</p>
      <p>Humidity: {weatherData.humidity}%</p>
    </>
  );
};

export default Weather;
