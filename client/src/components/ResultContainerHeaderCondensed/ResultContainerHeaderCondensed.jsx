import React from "react";
import "./ResultContainerHeaderCondensed.css";

const ResultContainerHeaderCondensed = props => (
    <div className={"border-top-right-rad-1p25em padding-bottom-p5em padding-left-1em padding-top-p5em text-center " + props.bgColor + " " + props.fontColor}>
        <h4>
            {props.title}
        </h4>
    </div>
);

export default ResultContainerHeaderCondensed;