import React, { useCallback, useState } from "react";
import { List, ListItem, Box, Typography, Container } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import openedDoor from "./door-opened.png";
import { DoorSwitch, LightSwitch } from "./Switch";
import lightbulb from "./lightbulb.png";
const Device = ({lightTurnOn, doorTurnOn}) => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Box mt={2} mb={4} width="100%" alignContent="center">
      <RoundPaper
        style={{
          width: 400,
          height: 300,
          backgroundColor: "#f8bbd0",
        }}
      >
        <img
          id="openedDoor"
          src={openedDoor}
          width="80"
          height="80"
          style={{ left: 60, top: 20, position: "relative" }}
        ></img>
        <DoorSwitch lightTurnOn={lightTurnOn} doorTurnOn={doorTurnOn} />
        <img
          id="lightbulb"
          src={lightbulb}
          width="80"
          height="80"
          style={{ right: 65, top: 200, position: "relative" }}
        ></img>
        <LightSwitch lightTurnOn={lightTurnOn} doorTurnOn={doorTurnOn} />
      </RoundPaper>
    </Box>
  );
};
export default Device;
