import "./DescriptionAndNoteCondensed.css";
import React from "react";
import Note from "../Note";

const DescriptionAndNoteCondensed = props => (
    <div className="font-opensans padding-bottom-p25em padding-left-p5em padding-right-p5em position-relative padding-top-p5em">
        <div className="bg-white border-style-solid border-width-1px font-weight-600 padding-bottom-p5em padding-top-p5em text-center">{props.description}</div>
        <Note 
            notes = {props.notes}
        />
    </div>  
);

export default DescriptionAndNoteCondensed;