import React, { useCallback, useState } from "react";
import { List, ListItem, Box, Typography, Container, Grid, colors } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import openedDoor from "./door-opened.png";
import { DoorSwitch, LightSwitch1, LightSwitch2, BrightnessBar } from "./Switch";
import lightbulb from "./lightbulb.png";
const Device = ({database, onClick}) => {
  return (
    <Box mt={2} mb={4} alignItems="center">
      <RoundPaper
        style={{
          width: 550,
          height: 300,
          background: "rgba(164, 184, 237, 0.8)",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          id="openedDoor"
          src={openedDoor}
          width="60"
          height="60"
          style={{ left: 60, top: 0, position: "relative" }}
        ></img>
        <DoorSwitch database={database} onClick={onClick} />
        <img
          id="lightbulb"
          src={lightbulb}
          width="60"
          height="60"
          style={{ right: 45, top: 90, position: "relative" }}
        ></img>
        <LightSwitch1 database={database} onClick={onClick} />
        <img
          id="lightbulb"
          src={lightbulb}
          width="60"
          height="60"
          style={{ right: 150, top: 180, position: "relative" }}
        ></img>
          <LightSwitch2 database={database} onClick={onClick} />
          <BrightnessBar database={database}/>
        <label style={{
          left: 345,
          top:50,
          position: "relative",
          fontSize: 20,
          color: "#ffffff",
          fontWeight: "bold"
        }}>
          BRIGHTNESS
        </label>
      </RoundPaper>
    </Box>
  );
};
export default Device;
