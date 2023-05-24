import React, { Component } from "react";
import axios from "axios";

export class WeatherC extends Component {
  state = { location: "" };
  async componentDidMount() {
    try {
      let response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vn&APPID=99304111698aae26771d10249f06845c"
      );
      console.log("check data", response);
      this.setState({ location: response.data.name });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    console.log("rendered");
    return <div>location: {this.state.location}</div>;
  }
}

export default WeatherC;
