import React, { useState } from "react";
import { Switch } from "antd";
const DoorSwitch = () => {
  let locked = false;
  return (
    <Switch
      defaultChecked={locked}
      onChange={(locked) => {
        locked = !locked;
      }}
      style={{ left: 200, top: 30 }}
    ></Switch>
  );
};
const LightSwitch = () => {
  let turnOn = false;
  return (
    <Switch
      defaultChecked={turnOn}
      onChange={(turnOn) => {
        turnOn = !turnOn;
      }}
      style={{ left: 75, top: 200 }}
    ></Switch>
  );
};
export { DoorSwitch };
export { LightSwitch };
