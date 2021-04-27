import React from "react";
import SplitPane, { Pane } from "react-split-pane";
const Device = () => {
  return (
    <SplitPane split="horizontal" style={{ width: 50, height: 50 }}>
      <div
        style={{
          width: "947px",
          height: "204px",
          backgroundColor: "#F2C4CE",
          position: "absolute",
          boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          display: "flex",
          borderRadius: "20px",
        }}
      ></div>
    </SplitPane>
  );
};
export default Device;
