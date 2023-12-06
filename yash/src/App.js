import './App.css';
import React, { useState } from "react";
import search_icon from './Assets/search.png';
import clear_icon from './Assets/clear.png';
import cloud_icon from './Assets/cloud.png';
import drizzle_icon from './Assets/drizzle.png';
import rain_icon from './Assets/rain.png';
import snow_icon from './Assets/snow.png';
import wind_icon from './Assets/wind.png';
import humidity_icon from './Assets/humidity.png';

const Weather = () => {
  const [wicon, setWicon] = useState(cloud_icon);

  let api_key = "dd94f859a0e52d6e4767fddf735f04a7";

  const Search = async () => {
    const element = document.getElementsByClassName("cityinput")
    if (element[0].value === "") {
      return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent")
    const wind = document.getElementsByClassName("wind-rate")
    const temperature = document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "Km/H";
    temperature[0].innerHTML = Math.round(data.main.temp - 273.15) + "°C";
    location[0].innerHTML = data.name;

    if (data.weather[0].main === "Clear") {
      setWicon(clear_icon);
    } else if (data.weather[0].main === "Clouds") {
      setWicon(cloud_icon);
    } else if (data.weather[0].main === "Drizzle") {
      setWicon(drizzle_icon);
    } else if (data.weather[0].main === "Rain" || data.weather[0].main === "10d") {
      setWicon(rain_icon);
    } else if (data.weather[0].main === "Snow") {
      setWicon(snow_icon);
    }
  }
  return (
    <div>
      <div className="container">
        <div className="top-bar">
          <input type="text" className="cityinput" />
          <div className="search-icon" onClick={() => {Search() }}>
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className="weather-image">
          <img src={wicon} /> 
        </div>
        <div className="weather-temp">29°C</div>
        <div className="weather-location">South Korea</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} className="icon" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} className="icon" />
            <div className="data">
              <div className="wind-rate">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather;
