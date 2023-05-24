import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import "./Weather.scss";

const Weather = () => {
  console.log("run render");

  return (
    <div className="weather-app-container">
      {/* location: {weatherService} / {weatherForecast} */}
      <Search />
    </div>
  );
};

export default Weather;
