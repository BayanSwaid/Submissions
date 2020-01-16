import React from "react";
import cloudy from "../src/img/weather-icons/partlycloudy.svg";

export default function Weather(props) {
  return (
    <>
      <div className="today-icon">
        <img className="img" src={cloudy} alt="storm icon" />
      </div>
      <div className="today-txt">{props.description}</div>
      <div className="mt-25">
        <span className="bold">
          <b>Temperature</b>
        </span>
        {Math.floor(props.minTemp - 273.15)} &#8451; to{" "}
        {Math.floor(props.maxTemp - 273.15)} &#8451;
      </div>
      <div className="mt-26">
        <span className="bold">Humidity</span> {props.humidity}%
        <span className="bold2">Pressure</span> {props.pressure}
      </div>
    </>
  );
}
