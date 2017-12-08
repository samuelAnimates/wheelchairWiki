import React from "react";
import "./ResultContainerHeader.css";

const ResultContainerHeader = props => (
    <div className={"border-top-right-rad-1p25em padding-left-1em padding-right-1p75em padding-bottom-1em padding-top-1em text-center " + props.bgColor + " " + props.fontColor}>
        <h4>
            {props.title}
        </h4>
    </div>
);

export default ResultContainerHeader;