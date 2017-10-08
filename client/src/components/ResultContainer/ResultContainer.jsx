import React from "react";
import "./ResultContainer.css";
import ResultContainerBody from "../ResultContainerBody"
import ResultContainerHeader from "../ResultContainerHeader"

const ResultContainer = props => (

    <div className={"border-radius-p25-1p4-p75em border-style-solid border-width-2px box-shadow " + props.bgColor}>
        <div>
            <ResultContainerHeader
                title= {props.site.name}
                bgColor= {props.headingBgColor}
            />
        </div>
        <div>
            <ResultContainerBody
                site= {props.site}
                labelColor={props.headingBgColor}
            />
        </div>
    </div>

);

export default ResultContainer;