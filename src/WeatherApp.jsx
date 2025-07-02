import React, { useState } from 'react'
import Searchbox from './Searchbox'
import InfoBox from './InfoBox'

const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "",
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        feelsLike: 0,
        weather: ""

    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
  return (
    <div style={{ textAlign: "center", marginTop: "5px", width: "100%", height: "100%" }}>
      <h1 style={{ fontFamily: "Arial, sans-serif" }}>Weather App</h1>

        <Searchbox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
    </div>
  )
}

export default WeatherApp
