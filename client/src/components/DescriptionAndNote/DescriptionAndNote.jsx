import "./DescriptionAndNote.css";
import React from "react";
import Note from "../Note";

const DescriptionAndNote = props => (
    <div className="font-opensans padding-bottom-1em padding-left-p5em padding-right-p5em position-relative">
        <div className="bg-white border-style-solid border-width-1px font-weight-600 padding-bottom-1em padding-top-1em text-center">{props.description}</div>
        <Note 
            notes = {props.notes}
        />
    </div>  
);

export default DescriptionAndNote;