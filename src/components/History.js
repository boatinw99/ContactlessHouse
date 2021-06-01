import React from 'react'
import SplitPane, { Pane } from "react-split-pane";

function History({historyList}) {
    return (
        <div className="history">
            { historyList.map((hist,index) => (
                <div className="hist">
                <h3>{hist.device}</h3>
                <p>{hist.Time} {hist.state}</p>

                </div>
            ))}
            <h3> hello </h3>
        </div>
    )
}
 
export default History ;
