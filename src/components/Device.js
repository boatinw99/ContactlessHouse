import React, { useCallback, useState } from "react";
import { List, ListItem, Box, Typography, Container } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import openedDoor from "./door-opened.png";
import { DoorSwitch, LightSwitch } from "./Switch";
import lightbulb from "./lightbulb.png";
const Device = ({database, onClick}) => {
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
        <DoorSwitch database={database} onClick={onClick} />
        <img
          id="lightbulb"
          src={lightbulb}
          width="80"
          height="80"
          style={{ right: 65, top: 200, position: "relative" }}
        ></img>
        <LightSwitch database={database} onClick={onClick} />
      </RoundPaper>
    </Box>
  );
};
export default Device;
