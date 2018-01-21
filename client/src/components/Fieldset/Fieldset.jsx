import React from "react";
import "./Fieldset.css";

const Fieldset = props => {

    return (
        <div className="padding-bottom-p25em">
            <fieldset className="bg-255-253-242 border-color-90-79-120 border-style-solid border-width-2px padding-bottom-p25em padding-top-p25em">
                <legend className="padding-left-p5em padding-right-p5em">{props.legend}</legend>
                {props.children}
            </fieldset>
        </div>

)}

export default Fieldset;