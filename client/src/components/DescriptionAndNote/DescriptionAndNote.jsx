import "./DescriptionAndNote.css";
import React from "react";
import Note from "../Note";

const DescriptionAndNote = props => (
    <div className="bg-white border-style-solid border-width-1px clear-both font-opensans padding-bottom-1em padding-left-p5em padding-right-p5em padding-top-1em">
        <div className="padding-bottom-1em text-center">{props.description}</div>
        <Note 
            notes = {props.notes}
        />
    </div>  
);

export default DescriptionAndNote;