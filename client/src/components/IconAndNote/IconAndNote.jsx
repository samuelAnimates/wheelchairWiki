import React from "react";
import "./IconAndNote.css";
import Note from "../Note";

const IconAndNote = props => (
    <div className="padding-bottom-1em padding-left-1em padding-right-1em float-left width-100pc">
        <div className="display-block margin-auto padding-left-1em padding-right-1em padding-top-1em text-center">
            <h5 className="text-center">{props.title}</h5>
            <img className="display-block margin-auto max-width-10em text-center width-40pc" src={props.logoPath} alt={props.alt}></img>
            <div className={"clear-both display-block font-exo color-white display-block margin-auto padding-bottom-p25em padding-top-p25em position-relative text-center width-100pc "+ props.labelColor}>
                {props.label}
            </div>
        </div>
        <div className="clear-both">
            <Note
                notes = {props.notes}
            />
        </div>
    </div>
);

export default IconAndNote;