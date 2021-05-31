import React, { useCallback, useState } from "react";
import { List, ListItem, Box, Typography, Container, Grid } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import openedDoor from "./door-opened.png";
import { DoorSwitch, LightSwitch1, LightSwitch2, BrightnessBar } from "./Switch";
import lightbulb from "./lightbulb.png";
const Device = ({lightTurnOn, doorTurnOn}) => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Grid container spacing={24}>
        <Grid item xs={6}>
    <Box mt={2} mb={4} width="50%" alignContent="center" bgcolor="primary.main">
      <RoundPaper
        style={{
          width: 300,
          height: 300,
          backgroundColor: "#f8bbd0",
        }}
      >
        <img
          id="openedDoor"
          src={openedDoor}
          width="60"
          height="60"
          style={{ left: 60, top: 20, position: "relative" }}
        ></img>
        <DoorSwitch lightTurnOn={lightTurnOn} doorTurnOn={doorTurnOn} />
        <img
          id="lightbulb"
          src={lightbulb}
          width="60"
          height="60"
          style={{ right: 50, top: 120, position: "relative" }}
        ></img>
        <LightSwitch1 lightTurnOn={lightTurnOn} doorTurnOn={doorTurnOn} />
        <img
          id="lightbulb"
          src={lightbulb}
          width="60"
          height="60"
          style={{ right: 153, top: 220, position: "relative" }}
        ></img>
         <LightSwitch2 lightTurnOn={lightTurnOn} doorTurnOn={doorTurnOn} />
      </RoundPaper>
    </Box>
    </Grid>
    <Grid item xs={6}>
    <Box bgcolor="error.main">
    <BrightnessBar brightness = "50"/>
    </Box>
    </Grid>
    </Grid>
  );
};
export default Device;
