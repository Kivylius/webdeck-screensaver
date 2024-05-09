import React from "react";
import { atom } from "./screensavers/atom";
import { bounce } from "./screensavers/bounce";

export const init = ({ drawKey, config }) => {
  console.log("webdeck-screensaver inited", drawKey, config);

  const interval = setInterval(() => {
    drawKey(({ ctx, canvas }) => {
      if (config?.type === undefined || config?.type === "atom") {
        atom(ctx, canvas);
      } else if (config?.type === "bounce") {
        bounce(ctx, canvas);
      }
    });
  }, 50);

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
        backgroundColor: "#00D1D1",
        color: "white",
      }}
    >
      <h3>hello from webdeck-screensaver</h3>
      <div className="setting">
        <label htmlFor="type">screensaver: </label>
        <select
          required
          name="type"
          onChange={onChange}
          value={config.type || ""}
        >
          <option value="" disabled hidden>
            atom
          </option>
          <option value="atom">atom *</option>
          <option value="bounce">bounce *</option>
        </select>
      </div>
      <small>* page reload required</small>
    </div>
  );
};

export default App;
