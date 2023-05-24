import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherService, setWeatherService] = useState("");
  const [weatherForecast, setWeatherForecast] = useState("");

  useEffect(() => {
    async function fetchCurrentWeather() {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vn&APPID=99304111698aae26771d10249f06845c"
        );
        console.log(">>> response current weather", response);
        setWeatherService(response.data.name);
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
          "https://api.openweathermap.org/data/2.5/forecast?lat=21.0245&lon=105.8412&appid=99304111698aae26771d10249f06845c"
        );
        console.log(">>>response weather forecast", response);
        setWeatherForecast(response.data.city.name);
      } catch (error) {
        console.error(error);
      }
    }
    // console.log("run useEffect");
    fetchWeatherForecast();
  }, []);
  console.log("run render");
  return (
    <div>
      location: {weatherService} / {weatherForecast}
      {/* {i} */}
    </div>
  );
};

export default Weather;
