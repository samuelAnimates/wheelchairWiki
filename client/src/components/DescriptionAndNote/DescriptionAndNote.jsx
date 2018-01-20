import "./DescriptionAndNote.css";
import React from "react";


const DescriptionAndNote = props => (
    <div className="font-opensans padding-bottom-1em padding-left-p5em padding-right-p5em position-relative">
        <div className="bg-white border-style-solid border-width-1px padding-bottom-1em padding-top-1em text-center">
            <div className="font-weight-600">
                {props.description}
            </div>
            <div className="font-size-p75em font-weight-400 padding-top-p5em">
                {props.notes}
            </div>
        </div>
    </div>

);

export default DescriptionAndNote;