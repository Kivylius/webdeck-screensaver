import React from "react";
import { bounce } from "./screensavers/bounce";

export const init = ({ drawKey, config }) => {
  console.log("HOTLINKER: init was called", drawKey, config);

  const interval = setInterval(() => {
    drawKey(({ ctx, canvas }) => {
      if (!config.type || config?.type === "bounce") {
        bounce(ctx, canvas);
      }
    });
  }, 500);

  return () => {
    clearInterval(interval);
  };
};

export const manifest = {
  version: 1,
  bespoke: true,
};

const App = ({ config, setConfig }) => {
  const onChange = (event) => {
    console.log(event.target.name, event.target.value);
    setConfig({ ...config, [event.target.name]: event.target.value });
  };

  return (
    <div
      style={{
        borderRadius: "4px",
        padding: "2em",
        backgroundColor: "cyan",
        color: "white",
      }}
    >
      <div>hello from webdeck-screensaver</div>
      <div className="setting">
        <label htmlFor="type">screensaver: </label>
        <select
          required
          name="type"
          onChange={onChange}
          value={config.type || ""}
        >
          <option value="" disabled hidden>
            bounce
          </option>
          <option value="bounce">bounce</option>
        </select>
      </div>
    </div>
  );
};

export default App;
