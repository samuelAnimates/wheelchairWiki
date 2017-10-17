import React from "react";
import "./ResultContainer.css";
import ResultContainerBody from "../ResultContainerBody"

const ResultContainer = props => (

    <div className={"border-radius-p25-1p4-p75em border-style-solid border-width-2px box-shadow " + props.bgColor}>
        <div>
            <ResultContainerBody
                title= {props.site.name}
                headingbgColor= {props.headingBgColor}
                fontColor= {props.fontColor}
                displaySiteEditPopup={props.displaySiteEditPopup}
                site= {props.site}
                labelColor={props.headingBgColor}
            />
        </div>

    </div>

);

export default ResultContainer;