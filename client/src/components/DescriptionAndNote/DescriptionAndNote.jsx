import "./DescriptionAndNote.css";
import React from "react";
import Note from "../Note";

const DescriptionAndNote = props => (
    <div className="bg-white border-style-solid border-width-1px clear-both font-opensans padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em width-100pc">
        <div className="text-center">wqretjyhtrghfsnghfhd sgdndgsdf sgddgsfng</div>
        <Note 
            notes = {props.notes}
        />
    </div>  
);

export default DescriptionAndNote;