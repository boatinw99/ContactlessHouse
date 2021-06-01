import React from 'react'
import SplitPane, { Pane } from "react-split-pane";

function History({historyList}) {
    return (
        <div className = "history" 
		 style={{
          background: "rgba(164, 184, 237, 0.8)",
        }}
        >
            { historyList.map((hist,index) => (
                <div className="hist">
                <h3>{hist.Device}</h3>
                <p>{hist.Time} {hist.state}</p>

                </div>
            ))}
        </div>
    )
}
 
export default History ;
