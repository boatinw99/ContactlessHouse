import React from "react";
import SplitPane, { Pane } from "react-split-pane";
import openedDoor from "./door-opened.png";

function Controls() {
  return (
    <SplitPane
      split="vertical"
      className="controls"
      minSize="10%"
      defaultSize="10%"
    >
      <div>
        <img id="openedDoor" src={openedDoor} width="80" height="80"></img>
      </div>
    </SplitPane>
  );
}

export default Controls;
