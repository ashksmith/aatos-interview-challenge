import { memo, ReactElement } from "react";
import { Card } from "antd";

import WeatherIcon from "components/WeatherIcon/WeatherIcon";

interface ForecastCardProps {
  title: string;
  min: string;
  max: string;
  apiWeatherCode: number;
}

const ForecastCard = (props: ForecastCardProps): ReactElement => {
  const { min, max, apiWeatherCode, title } = props;

  return (
    <Card size="small" title={title} hoverable>
      <WeatherIcon height="75px" width="75px" apiWeatherCode={apiWeatherCode} />
      <p>Min: {min} °C</p>
      <p>Max: {max} °C</p>
    </Card>
  );
};

const Memo = memo(ForecastCard);
export default Memo;
