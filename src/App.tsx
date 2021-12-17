import "App.scss";
import { useState, FunctionComponent } from "react";
import { Switch, Typography } from "antd";

import Weather from "Weather";
import Header from "components/Header/Header";
import { Cities } from "interfaces";

const App: FunctionComponent = () => {
  const [city, setCity] = useState<Cities>("Helsinki");
  const prefersDark = window.matchMedia("prefer-color-scheme: dark").matches;
  const [dark, setDark] = useState<boolean>(prefersDark);
  const [imperial, setImperial] = useState<boolean>(false);

  return (
    <div className={`App ${dark ? "Dark" : "Light"}`}>
      <div className="SettingsContainer">
        <div className="Flex">
          <Typography.Title level={5}>Dark mode:</Typography.Title>
          <Switch onChange={() => setDark(!dark)} />
        </div>
        <div className="Flex">
          <Typography.Title level={5}>Imperial:</Typography.Title>
          <Switch onChange={() => setImperial(!imperial)} />
        </div>
      </div>

      <Header city={city} setCity={setCity} />
      <Weather city={city} imperial={imperial} />
    </div>
  );
};

export default App;
