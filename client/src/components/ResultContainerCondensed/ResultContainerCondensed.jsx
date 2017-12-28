import React from "react";
import "./ResultContainerCondensed.css";
import ResultContainerBodyCondensed from "../ResultContainerBodyCondensed"

const ResultContainerCondensed = props => (

    <div className={"border-radius-p25-1p4-p75em border-style-solid border-width-2px box-shadow " + props.bgColor}>
        <div>
            <ResultContainerBodyCondensed
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

export default ResultContainerCondensed;