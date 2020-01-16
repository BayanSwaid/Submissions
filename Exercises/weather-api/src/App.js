import React, { Component } from "react";
import "./App.css";
import storm from "../src/img/weather-icons/storm.svg";
import cloudy from "../src/img/weather-icons/partlycloudy.svg";
import Search from "./search.js";
import Weather from "./weather_now";
import WeatherLater from "./weatherLater";
import FakeWeather from "./data/FakeWeather.json";

class App extends Component {
  constructor(props) {
    super(props);
    /*  this.state = {
      description : "",
      minTemp: "",
      maxTemp: "",
      humidity: "",
      pressure: "",
    };*/
  }
  /* componentDidMount() { 
    this.setState({
      description: FakeWeather.list[0].weather[0].main,
      minTemp: FakeWeather.list[0].main.temp_min,
      maxTemp: FakeWeather.list[0].main.temp_max,
      humidity: FakeWeather.list[0].main.humidity,
      pressure: FakeWeather.list[0].main.pressure
        });
  }*/
  render() {
    console.log(FakeWeather.list[0].dt_txt);

    return (
      <div className="app">
        <nav>
          <Search />
        </nav>
        <div className="container">
          <div className="today-container">
            <Weather
              description={FakeWeather.list[0].weather[0].main}
              pressure={FakeWeather.list[0].main.pressure}
              minTemp={FakeWeather.list[0].main.temp_min}
              maxTemp={FakeWeather.list[0].main.temp_max}
              humidity={FakeWeather.list[0].main.humidity}
            />
          </div>
          <div className="hourly-title"> </div>
          <div className="row">
            <WeatherLater time="03:00" degree="8 &#8451;" imgSrc={storm} />
            <div className="hours-weather">
              <WeatherLater time="06:00" degree="9 &#8451;" imgSrc={storm} />
            </div>
            <div className="hours-weather">
              <WeatherLater time="09:00" degree="14 &#8451;" imgSrc={storm} />
            </div>
            <div className="hours-weather">
              <WeatherLater time="" degree="17 &#8451;" imgSrc={storm} />
            </div>
            <div className="hours-weather">
              <WeatherLater time="15:00" degree="18 &#8451;" imgSrc={storm} />
            </div>
            <div className="hours-weather">
              <WeatherLater time="18:00" degree="16 &#8451;" imgSrc={storm} />
            </div>
            <div className="hours-weather">
              <WeatherLater time="9.00" degree="13 &#8451;" imgSrc={storm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
