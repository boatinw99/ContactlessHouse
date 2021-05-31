import React, { useState } from "react";
import { Switch, Progress } from "antd";
const DoorSwitch = ({lightTurnOn, doorTurnOn}) => {
  let locked = doorTurnOn;
  return (
    <Switch
      defaultChecked={locked}
      onChange={(locked) => {
        locked = !locked;
      }}
      style={{ left: 130, top: 22 }}
    ></Switch>
  );
};
const LightSwitch1 = ({lightTurnOn, doorTurnOn}) => {
  let turnOn = lightTurnOn;
  return (
    <Switch
      defaultChecked={turnOn}
      onChange={(turnOn) => {
        turnOn = !turnOn;
      }}

      style={{ left: 25, top: 120 }}
    ></Switch>
  );
};
const LightSwitch2 = ({lightTurnOn, doorTurnOn}) => {
  let turnOn = lightTurnOn;
  return (
    <Switch
      defaultChecked={turnOn}
      onChange={(turnOn) => {
        turnOn = !turnOn;
      }}
      style={{ left: 190, top: 180 }}
    ></Switch>
  );
};
const BrightnessBar = ({brightness}) => {
  return (
    <Progress
     type = "dashboard"
     gapDegree = "90"
     percent = { parseInt(brightness,10) }
     strokeColor={{
      "0%": "#108ee9",
      "100%": "#87d068"
    }}
     >
    </Progress>
  );
};
export { DoorSwitch };
export { LightSwitch1 };
export { LightSwitch2 };
export { BrightnessBar };
