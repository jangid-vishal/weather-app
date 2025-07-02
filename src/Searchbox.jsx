import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Searchbox.css";

const Searchbox = ({ updateInfo }) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "2aba559055642f8d5d200d4360cb9839";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
   try{
     e.preventDefault();

    console.log(`Searching for weather in ${city}`);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);

   } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="searchbox">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <div className="error-message" style={{ color: "red", marginTop: "10px" }}>
            {alert("City not found. Please try again.")}
          </div>
        )}
      </form>
    </div>
  );
};

export default Searchbox;
