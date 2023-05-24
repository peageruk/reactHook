import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const WeatherByLocation = () => {
  const { name, lat, lon } = useParams();
  const [weatherService, setWeatherService] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState([]);

  useEffect(() => {
    async function fetchCurrentWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${name},vn&APPID=99304111698aae26771d10249f06845c`
        );
        console.log(">>> response current weather", response.data);
        setWeatherService(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    // console.log("run useEffect");
    fetchCurrentWeather();
  }, []);

  useEffect(() => {
    async function fetchWeatherForecast() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=99304111698aae26771d10249f06845c`
        );
        console.log(">>>response weather forecast", response.data);
        setWeatherForecast(response.data.list);
      } catch (error) {
        console.error(error);
      }
    }
    // console.log("run useEffect");
    fetchWeatherForecast();
  }, []);
  return (
    <div>
      <div>
        Current weather
        <div>
          {weatherForecast.map((list) => {
            return (
              <div className="weather-forecast">
                <div>Time: {list.dt_txt}</div>
                <div>Temperature: {Math.floor(+list.main.temp - 273.5)}</div>
                <div>
                  Feels like: {Math.floor(+list.main.feels_like - 273.5)}
                </div>
                {/* <div>
                  Minimum temperature: {Math.floor(+list.main.temp_min - 273.5)}
                </div>
                <div>
                  Maximum temperature: {Math.floor(+list.main.temp_max - 273.5)}
                </div> */}
                <div>Weather: {list.weather[0].main}</div>
                <div>Weather condition: {list.weather[0].description}</div>
                {/* <div>Weather icon id: {list.weather[0].icon}</div> */}
                {/* <div>Wind speed: {list.wind.speed}</div> */}
                {/* <div>Wind direction: {list.wind.deg}</div> */}
                {/* <div>Wind gust: {list.wind.gust}</div> */}
                {/* <div>Average visibility: {list.visibility}meter</div> */}
                <div>Probability: {list.pop * 100}%</div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        weatherForecast
        {/* <div>{weatherForecast}</div> */}
      </div>
    </div>
  );
};

export default WeatherByLocation;
