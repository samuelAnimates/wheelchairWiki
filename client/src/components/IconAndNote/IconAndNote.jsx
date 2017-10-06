import React from "react";
import "./IconAndNote.css";
import Note from "../Note";

const IconAndNote = props => (
    <div className="padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em">
        <h3 className="font-exo font-size-1p25em font-weight-600 text-center">{props.title}</h3>
        <div className="display-block margin-auto width-50pc">
            <figure className="font-exo font-weight-600 text-center">
                <img className="display-block margin-auto max-width width-100pc" src={props.logoPath} alt={props.alt}></img>
                <figcaption className="padding-top-1em">{props.label}</figcaption>
            </figure>
        </div>
        <Note
            notes = {props.notes}
        />
    </div>
);

export default IconAndNote;