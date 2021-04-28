import React, { useState } from "react";
import { Switch } from "antd";
const DoorSwitch = () => {
  return (
    <Switch
      style={{ marginLeft: 150, marginTop: 40 }}
      defaultChecked={false}
    ></Switch>
  );
};
export default DoorSwitch;
