import React, { useCallback, useState } from "react";
import { List, ListItem, Box, Typography, Container } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import openedDoor from "./door-opened.png";
import DoorSwitch from "./Switch";
const Device = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Box mt={2} mb={4} width="100%" alignContent="center">
      <RoundPaper
        style={{
          width: 600,
          height: 400,
          backgroundColor: "#f8bbd0",
        }}
      >
        <img
          id="openedDoor"
          src={openedDoor}
          width="80"
          height="80"
          style={{ marginLeft: 100, marginTop: 40 }}
        ></img>
        <DoorSwitch></DoorSwitch>
      </RoundPaper>
    </Box>
  );
};
export default Device;
