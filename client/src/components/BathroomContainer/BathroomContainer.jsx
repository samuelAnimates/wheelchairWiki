import React from "react";
import "./BathroomContainer.css";
import BathroomContainerBody from "../BathroomContainerBody"
import ResultContainerHeader from "../ResultContainerHeader"

const ResultContainer = props => (

    <div className={"border-radius-p25-1p4-p75em border-style-solid border-width-2px box-shadow " + props.bgColor}>
        <div>
            <ResultContainerHeader
                title= {props.bathroom.name}
                bgColor= {props.headingBgColor}
            />
        </div>
        <div>
            <BathroomContainerBody
                bathroom= {props.bathroom}
            />
        </div>
    </div>

);

export default ResultContainer;