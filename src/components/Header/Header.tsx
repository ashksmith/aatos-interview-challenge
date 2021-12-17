import "./Header.css";
import { Typography } from "antd";
import { ReactElement } from "react";

import CityDropdown from "components/CityDropdown/CityDropdown";
import { Cities } from "interfaces";
import { weekdays, months } from "project_constants";

const { Title } = Typography;

interface HeaderProps {
  city: Cities;
  setCity: any;
}

const Header = (props: HeaderProps): ReactElement => {
  const { city, setCity } = props;

  const todaysDate: Date = new Date();
  const day = weekdays[todaysDate.getDay() - 1];
  const month = months[todaysDate.getMonth()];
  const date = todaysDate.getDate();
  const dateString = `${day}, ${date} ${month}`;

  return (
    <div className="HeaderContainer">
      <CityDropdown city={city} setCity={setCity} />
      <Title level={4}>{dateString}</Title>
    </div>
  );
};

export default Header;
