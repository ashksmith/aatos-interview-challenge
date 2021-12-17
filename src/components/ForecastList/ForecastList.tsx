import "./ForecastList.css";
import { memo, ReactElement } from "react";

import ForecastCard from "components/ForecastCard/ForecastCard";

import { ForecastData } from "interfaces";
import { weekdays } from "project_constants";

const getDayFromTodaysDate = (days: number): string => {
  const todaysDate = new Date();
  const currentDate = new Date();
  currentDate.setDate(todaysDate.getDate() + days);

  return weekdays[currentDate.getDay()];
};

interface ForecastListProps {
  forecastData: ForecastData[];
  imperial: boolean;
}

const ForecastList = (props: ForecastListProps): ReactElement => {
  const { forecastData, imperial } = props;

  return (
    <div className="ForecastListContainer">
      {forecastData.map((f, index) => (
        <ForecastCard
          imperial={imperial}
          key={index}
          title={getDayFromTodaysDate(index)}
          min={f.tempMin}
          max={f.tempMax}
          apiWeatherCode={f.apiWeatherCode}
        />
      ))}
    </div>
  );
};

const Memo = memo(ForecastList);
export default Memo;
