import React, { useState } from "react";
import { Switch } from "antd";
const DoorSwitch = ({database, onClick}) => {
  let lock = (database.door === "lock")
  return (
    <Switch
      checked={!lock}
      onChange = {() => onClick("door", lock ? "unlock" : "lock")}
      style={{ left: 200, top: 30 }}
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

      style={{ left: 75, top: 200 }}
    ></Switch>
  );
};

const LightSwitch2 = ({database, onClick}) => {
  const on = (database.light2 === "on")
  return (
    <Switch
      checked={on}
      onChange = {() => onClick("light2", on ? "off" : "on")}

      style={{ left: 75, top: 200 }}
    ></Switch>
  );
};

export { DoorSwitch };
// export { LightSwitch };
export { LightSwitch1 };
export { LightSwitch2 };
