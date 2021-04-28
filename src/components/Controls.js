import React from "react";
import SplitPane, { Pane } from "react-split-pane";
function Controls() {
  return (
      // <SplitPane split="vertical" className="controls" minSize="30%">
      <div className="controls">
        <div className="controlPane">
            <h2> Test </h2>
        </div>
        <div className="controlPane"> 
            <h2> Hello </h2>

        </div>
      </div>
      // </SplitPane>
  );
}

export default Controls;
