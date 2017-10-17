import React from "react";
import "./BathroomContainer.css";
import BathroomContainerBody from "../BathroomContainerBody"

const ResultContainer = props => (

    <div className={"border-radius-p25-1p4-p75em border-style-solid border-width-2px box-shadow " + props.bgColor}>
        <div>
            <BathroomContainerBody
                bathroom= {props.bathroom}
                title= {props.bathroom.name}
                headingColor= {props.headingBgColor}
            />
        </div>
    </div>

);

export default ResultContainer;