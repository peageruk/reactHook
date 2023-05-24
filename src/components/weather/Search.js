import React, { useState } from "react";
import axios from "axios";
import _ from "lodash";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Search = () => {
  const [keywords, setKeywords] = useState("");
  const [results, setResults] = useState([]);
  let history = useHistory();
  const handleSearchBtn = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${keywords}&limit=5&appid=99304111698aae26771d10249f06845c`
      );
      console.log(">>> response current weather", response.data);
      if (response && response.data) {
        setResults(response.data);
        if (_.isEmpty(response.data)) {
          alert("no results");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  // const selectLocation = async (result) => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${result.name}&APPID=99304111698aae26771d10249f06845c`
  //     );
  //     console.log(">>> response current weather", response.data);
  //     // setResults(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }

  // };
  const selectLocation = (result) => {
    console.log(result);
    history.push(`/weather/detail/${result.name}-${result.lon}-${result.lat}`);
  };
  return (
    <div>
      <div className="search-weather-container">
        <input
          type="text"
          placeholder="city search..."
          value={keywords}
          onChange={(event) => {
            setKeywords(event.target.value);
          }}
        />
        <button
          onClick={() => {
            handleSearchBtn();
          }}
        >
          Search
        </button>
      </div>

      <div className="result-container">
        {results.map((result) => {
          return (
            <div
              key={result.lat}
              className="result"
              onClick={() => {
                selectLocation(result);
              }}
            >
              <div className="name">{result.name}</div>
              {/* <div className="lat">lat: {result.lat}</div> */}
              {/* <div className="lon">lon: {result.lon}</div> */}
              <div className="country">{result.country}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
