import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const InfoBox = ({ info }) => {
  let INIT_URL =
    "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1603304851397-2ba2ea6eabdf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="info-box">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              info.humidity > 80
                ? RAIN_URL
                : (info.temp > 25
                ? HOT_URL
                : COLD_URL)
            }
          />
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component="div" sx={{ color: "var(--text-light)" }}>
              {info.city} {   info.humidity > 80
                ? <ThunderstormIcon />
                : (info.temp > 25
                ? <SunnyIcon />
                : <AcUnitIcon />)}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "var(--text-light)" }}
              component={"span"}
            >
              <div>Temperature = {info.temp}°C</div>
              <div>Min Temperature = {info.tempMin}°C</div>
              <div>Max Temperature = {info.tempMax}°C</div>
              <div>Humidity = {info.humidity}%</div>
              <div>
                The weather can be described as <i>{info.weather}</i> & feels
                like {info.feelsLike}°C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
