import React from "react";
import "./ResultContainerHeader.css";

const ResultContainerHeader = props => (
    <div className="bg-90-79-120 border-top-right-rad-1p25em color-white padding-left-1p75em padding-right-1p75em padding-top-1em text-center">
        <h2 className="font-exo font-size-2p5em font-weight-400 padding-left-1em">
            {props.title}
        </h2>
    </div>
);

export default ResultContainerHeader;