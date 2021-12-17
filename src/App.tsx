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

  return (
    <div className={`App ${dark ? "Dark" : "Light"}`}>
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: "15px",
          right: "15px",
          gap: "10px",
        }}
      >
        <Typography.Title level={5}>Dark mode:</Typography.Title>
        <Switch onChange={() => setDark(!dark)} />
      </div>
      <Header city={city} setCity={setCity} />

      <Weather city={city} />
    </div>
  );
};

export default App;
