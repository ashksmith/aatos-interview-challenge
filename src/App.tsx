import "App.scss";
import { useState, FunctionComponent } from "react";
import { Switch, Typography } from "antd";

import Weather from "Weather";
import Header from "components/Header/Header";
import { Cities } from "interfaces";

const App: FunctionComponent = () => {
  const lastChosenCity = localStorage.getItem("city");
  // @ts-ignore
  const [city, setCityF] = useState<Cities>(lastChosenCity || "Helsinki");

  const prefersDark: boolean =
    window.matchMedia("prefer-color-scheme: dark").matches ||
    JSON.parse(String(localStorage.getItem("dark")));
  const [dark, setDark] = useState<boolean>(prefersDark);

  const prefersImperial: boolean = JSON.parse(
    String(localStorage.getItem("imperial"))
  );
  const [imperial, setImperial] = useState<boolean>(prefersImperial);

  const setDarkWithLocalStorage = () => {
    setDark(!dark);
    localStorage.setItem("dark", !dark ? "true" : "false");
  };

  const setImperialWithLocalStorage = () => {
    setImperial(!imperial);
    localStorage.setItem("imperial", !imperial ? "true" : "false");
  };

  const setCity = (city: Cities) => {
    setCityF(city);
    localStorage.setItem("city", city);
  };

  return (
    <div className={`App ${dark ? "Dark" : "Light"}`}>
      <div className="SettingsContainer">
        <div className="Flex">
          <Typography.Title level={5}>Dark mode:</Typography.Title>
          <Switch onChange={() => setDarkWithLocalStorage()} checked={dark} />
        </div>
        <div className="Flex">
          <Typography.Title level={5}>Imperial:</Typography.Title>
          <Switch
            onChange={() => setImperialWithLocalStorage()}
            checked={imperial}
          />
        </div>
      </div>

      <Header city={city} setCity={setCity} />
      <Weather city={city} imperial={imperial} />
    </div>
  );
};

export default App;
