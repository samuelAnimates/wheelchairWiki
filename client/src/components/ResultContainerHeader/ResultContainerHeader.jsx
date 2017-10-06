import React from "react";
import "./ResultContainerHeader.css";

const ResultContainerHeader = props => (
    <div className={"border-top-right-rad-1p25em color-white padding-left-1em padding-right-1p75em padding-bottom-1em padding-top-1em text-center " + props.bgColor}>
        <h3 className="font-exo font-size-2em font-weight-400">
            {props.title}
        </h3>
    </div>
);

export default ResultContainerHeader;