import { memo, ReactElement } from "react";

import ClearSky from "components/icon_components/ClearSky";
import FewClouds from "components/icon_components/FewClouds";
import Misty from "components/icon_components/Misty";
import Rain from "components/icon_components/Rain";
import ShowerRain from "components/icon_components/ShowerRain";
import Snow from "components/icon_components/Rain";
import Thunder from "components/icon_components/Thunder";

import { ApiWeatherCodes } from "interfaces";

// OpenWeatherMap has IDs pertaining to different weather categories (rain, snow etc)
// The ID's follow for format XXX, eg 202. 2XX the the thunder group, 202 being thunder with rain
// This function maps the weather codes to a suitable custom weather icon
const convertWeatherCodeToSVGR = (
  apiWeatherCode: number,
  height: string,
  width: string
): any => {
  const weatherCode = Math.floor((apiWeatherCode / 100) % 10);

  // It turns out clear weather === 800 so shares the cloudy weather range
  // I must check for 800 first to show cloudy / clear weather correctly
  if (apiWeatherCode === ApiWeatherCodes.CLEAR) {
    return <ClearSky width={width} height={height} />;
  } else {
    switch (weatherCode) {
      case ApiWeatherCodes.THUNDER:
        return <Thunder width={width} height={height} />;
      case ApiWeatherCodes.DRIZZLE:
        return <Rain width={width} height={height} />;
      case ApiWeatherCodes.RAIN:
        return <ShowerRain width={width} height={height} />;
      case ApiWeatherCodes.SNOW:
        return <Snow width={width} height={height} />;
      case ApiWeatherCodes.ATMOSPHERE:
        return <Misty width={width} height={height} />;
      case ApiWeatherCodes.CLOUDY:
        return <FewClouds width={width} height={height} />;
      default:
        // TODO the default could be another icon but lets be optimistic about the default lol
        return <ClearSky width={width} height={height} />;
    }
  }
};

interface WeatherIconProps {
  apiWeatherCode: number;
  height?: string;
  width?: string;
}

const WeatherIcon = (props: WeatherIconProps): ReactElement => {
  const { apiWeatherCode, height = "100px", width = "100px" } = props;
  const Icon = convertWeatherCodeToSVGR(apiWeatherCode, height, width);

  return <>{Icon}</>;
};

const Memo = memo(WeatherIcon);
export default Memo;
