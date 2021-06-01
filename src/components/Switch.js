import React, { useState } from "react";
import { Switch, Progress } from "antd";
const DoorSwitch = ({database, onClick}) => {
  const lock = (database.door === "lock")
  return (
    <Switch
      checked={!lock}
      onChange = {() => onClick("door", lock ? "unlock" : "lock")}
      style={{ left: 130, top: 0 }}
    >
    </Switch>
  );
};
const LightSwitch1 = ({database, onClick}) => {
  const on = (database.light1 === "on")
  return (
    <Switch
      checked={on}
      onChange = {() => onClick("light1", on ? "off" : "on")}
      style={{ left: 27, top: 90 }}
    ></Switch>
  );
};

const LightSwitch2 = ({database, onClick}) => {
  const on = (database.light2 === "on")
  return (
    <Switch
      checked={on}
      onChange = {() => onClick("light2", on ? "off" : "on")}
      style={{ right: 78, top: 180 }}
    ></Switch>
  );
};
const BrightnessBar = ({database}) => {
  return (
    <Progress
     type = "dashboard"
     gapDegree = "90"
     percent = { parseInt(database.brightness,10) }
     strokeColor={{
      "0%": "#108ee9",
      "100%": "#87d068"
    }}
    strokeWidth = "9"
    style={{left: 40, top: 40, position:"relative"}}
    strokeLinecap="square"
     >
    </Progress>
  );
};
export { DoorSwitch };
export { LightSwitch1 };
export { LightSwitch2 };
export { BrightnessBar };
