import React, { useCallback, useState } from "react";
import { List, ListItem, Box, Typography, Container, Grid } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import openedDoor from "./door-opened.png";
import { DoorSwitch, LightSwitch1, LightSwitch2, BrightnessBar } from "./Switch";
import lightbulb from "./lightbulb.png";
const Device = ({database, onClick}) => {
  return (
    <Grid container spacing={24}>
        <Grid item xs={6}>
    <Box mt={2} mb={4}>
      <RoundPaper
        style={{
          width: 300,
          height: 300,
          backgroundColor: "#f8bbd0",
          marginLeft: 440
        }}
      >
        <img
          id="openedDoor"
          src={openedDoor}
          width="60"
          height="60"
          style={{ left: 60, top: 20, position: "relative" }}
        ></img>
        <DoorSwitch database={database} onClick={onClick} />
        <img
          id="lightbulb"
          src={lightbulb}
          width="60"
          height="60"
          style={{ right: 45, top: 120, position: "relative" }}
        ></img>
        <LightSwitch1 database={database} onClick={onClick} />
        <img
          id="lightbulb"
          src={lightbulb}
          width="60"
          height="60"
          style={{ right: 150, top: 220, position: "relative" }}
        ></img>
          <LightSwitch2 database={database} onClick={onClick} />
      </RoundPaper>
    </Box>
    </Grid>
    <Grid item xs={6}>
    <Box mt={2} mb={4}>
    <RoundPaper
        style={{
          width: 200,
          height: 300,
          backgroundColor: "#f8bbd0",
          marginRight: 480
        }}
      >
        <BrightnessBar database={database}/>
        <label style={{
          right: 50,
          top:100,
          position: "relative"
        }}>
          Brightness
        </label>
      </RoundPaper>
    </Box>
    </Grid>
    </Grid>
  );
};
export default Device;
