import React, { Component } from "react";
import "./ResultContainer.css";
import ResultContainerBody from "../ResultContainerBody"
import ResultContainerHeader from "../ResultContainerHeader"

const ResultContainer = props => (

    <div className="bg-246-246-249 border-radius-p25-1p4-p75em border-style-solid border-width-2px box-shadow padding-bottom-1em width-100pc">
        <div>
            <ResultContainerHeader
                title= {props.site.name}
            />
        </div>
        <div>
            <ResultContainerBody
            site= {props.site}
            />
        </div>
    </div>

);

export default ResultContainer;