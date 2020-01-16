import React, { Component } from "react";
import "./App.css";

class WeatherLater extends Component {
  render() {
    return (
      <>
        <div className="hours-weather">
          <div>{this.props.time}</div>
          <img alt="snsn" src={this.props.imgSrc} />
          <div>{this.props.degree}</div>
        </div>
      </>
    );
  }
}

export default WeatherLater;
