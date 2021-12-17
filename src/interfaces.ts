export interface ForecastData {
  apiWeatherCode: number;
  tempMin: string;
  tempMax: string;
}

export interface WeatherData {
  apiWeatherCode: number;
  description: string;
  sunrise: string;
  sunset: string;
  humidity: number;
  windspeed: string;
  tempMax: string;
  tempMin: string;
  temp: string;
}

export type Cities = "Helsinki" | "Tampere" | "Turku" | "Oulu";

export enum ApiWeatherCodes {
  THUNDER = 2,
  DRIZZLE = 3,
  RAIN = 5,
  SNOW = 6,
  ATMOSPHERE = 7,
  CLEAR = 800, // Bastards
  CLOUDY = 8,
}

export interface OpenWeatherApiWeatherData {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  uvi: number;
  visibility: number;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}

export interface OpenWeatherApiWeatherDataCurrent
  extends OpenWeatherApiWeatherData {
  temp: number;
}

export interface OpenWeatherApiWeatherDataDaily
  extends OpenWeatherApiWeatherData {
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
}

export interface OpenWeatherApiResponse {
  alerts: any[];
  daily: OpenWeatherApiWeatherDataDaily[];
  current: OpenWeatherApiWeatherDataCurrent;
  lat: number;
  long: number;
  timezone: string;
  timezone_offset: number;
}
