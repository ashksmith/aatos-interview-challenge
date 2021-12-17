import "./Weather.css";
import { useState, useEffect } from "react";

import WeatherDataSection from "components/WeatherDataSection/WeatherDataSection";
import ForecastList from "components/ForecastList/ForecastList";

import {
  WeatherData,
  Cities,
  OpenWeatherApiResponse,
  ForecastData,
} from "interfaces";

const convertTimestampTo24Hours = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const hoursNeedsZero = hours < 12 ? true : false;
  const minutesNeedsZero = minutes < 10 ? true : false;

  return `${hoursNeedsZero ? "0" : ""}${hours}:${minutes}${
    minutesNeedsZero ? "0" : ""
  }`;
};

const getLatLong = (city: Cities): { lat: number; lon: number } => {
  switch (city) {
    case "Helsinki":
      return { lat: 60.19, lon: 24.94 };
    case "Tampere":
      return { lat: 61.5, lon: 23.79 };
    case "Turku":
      return { lat: 60.45, lon: 22.27 };
    case "Oulu":
      return { lat: 65.01, lon: 25.47 };
    default:
      throw new Error("Unknown city");
  }
};

const getWeatherForecast = async (
  city: Cities
): Promise<{ current: WeatherData; forecast: ForecastData[] }> => {
  const { lat, lon } = getLatLong(city);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`
  );

  const data: OpenWeatherApiResponse = await response.json();
  const { sunrise, sunset, humidity, wind_speed, temp } = data.current;

  // Remove current day from forecast
  data.daily.shift();
  const forecastData: ForecastData[] = data.daily.map((f) => {
    return {
      apiWeatherCode: f.weather[0].id,
      tempMin: f.temp.min.toFixed(1),
      tempMax: f.temp.max.toFixed(1),
    };
  });

  return {
    current: {
      apiWeatherCode: data.current.weather[0].id,
      description: data.current.weather[0].description,
      sunrise: convertTimestampTo24Hours(sunrise),
      sunset: convertTimestampTo24Hours(sunset),
      humidity: humidity,
      windspeed: wind_speed.toFixed(1),
      temp: temp.toFixed(1),
      tempMax: data.daily[0].temp.max.toFixed(1),
      tempMin: data.daily[0].temp.min.toFixed(1),
    },
    forecast: forecastData,
  };
};

interface WeatherProps {
  city: Cities;
}

const Weather: any = (props: WeatherProps) => {
  const { city } = props;
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined
  );

  const [forecastData, setForecastData] = useState<ForecastData[]>([]);

  useEffect(() => {
    getWeatherForecast(city).then((res) => {
      setWeatherData(res.current);
      setForecastData(res.forecast);
    });
  }, [city]);

  return (
    <>
      {weatherData && forecastData && (
        <div className="WeatherContainer">
          <WeatherDataSection weatherData={weatherData} />
          <ForecastList forecastData={forecastData} />
        </div>
      )}
    </>
  );
};

export default Weather;
