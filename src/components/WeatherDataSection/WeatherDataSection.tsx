import "./WeatherDataSection.css";
import { FunctionComponent } from "react";
import { Typography, Row, Col } from "antd";

import { WeatherData } from "interfaces";
import WeatherIcon from "components/WeatherIcon/WeatherIcon";

const { Title } = Typography;

interface WeatherDataSectionProps {
  weatherData: WeatherData;
  imperial: boolean;
}

const WeatherDataSection: FunctionComponent<WeatherDataSectionProps> = (
  props
) => {
  const { imperial, weatherData } = props;
  const {
    apiWeatherCode,
    description,
    sunrise,
    sunset,
    humidity,
    windspeed,
    tempMax,
    tempMin,
    temp,
  } = weatherData;

  const tempUnit = imperial ? "°F" : "°C";
  const speedUnit = imperial ? "mph" : "m/s";

  return (
    <>
      <div className="WeatherGridContainer">
        <Row justify="center" align="middle">
          <Col span={12}>
            <WeatherIcon apiWeatherCode={apiWeatherCode} />
          </Col>
          <Col span={12}>
            <Title level={1} style={{ margin: 0 }}>
              {temp} {tempUnit}
            </Title>
            {description}
          </Col>
        </Row>
      </div>

      <div className="GridContainer">
        <Row justify="center" align="middle">
          <Col xs={24} sm={12}>
            Sunrise: {sunrise}
          </Col>
          <Col xs={24} sm={12}>
            Sunset: {sunset}
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col xs={24} sm={12} span={12}>
            Humidity: {humidity}%
          </Col>
          <Col xs={24} sm={12} span={12}>
            Windspeed: {windspeed} {speedUnit}
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col xs={24} sm={12} span={12}>
            Max degrees: {tempMax} {tempUnit}
          </Col>
          <Col xs={24} sm={12} span={12}>
            Min degrees: {tempMin} {tempUnit}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WeatherDataSection;
