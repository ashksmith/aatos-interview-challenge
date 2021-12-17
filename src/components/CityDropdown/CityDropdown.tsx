import "./CityDropdown.css";
import { ReactElement } from "react";
import { Dropdown, Menu, Typography } from "antd";

import { Cities } from "interfaces";

const { Title } = Typography;

interface CityDropdownProps {
  city: Cities;
  setCity: (city: Cities) => {};
}

const CityDropdown = (props: CityDropdownProps): ReactElement => {
  const { city, setCity } = props;
  const menu: ReactElement = (
    <Menu style={{ backgroundColor: "white !important" }}>
      <Menu.Item key={0} onClick={() => setCity("Helsinki")}>
        Helsinki
      </Menu.Item>
      <Menu.Item key={1} onClick={() => setCity("Tampere")}>
        Tampere
      </Menu.Item>
      <Menu.Item key={2} onClick={() => setCity("Turku")}>
        Turku
      </Menu.Item>
      <Menu.Item key={3} onClick={() => setCity("Oulu")}>
        Oulu
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} overlayClassName="MenuOverlay">
      <a onClick={(e) => e.preventDefault()}>
        <div className="CityNameContainer">
          <Title underline className="CityName">
            {city}
          </Title>
          <Typography.Title className="CountryName">, Finland</Typography.Title>
        </div>
      </a>
    </Dropdown>
  );
};

export default CityDropdown;
