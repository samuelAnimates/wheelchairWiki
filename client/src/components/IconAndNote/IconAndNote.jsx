import React from "react";
import "./IconAndNote.css";
import Note from "../Note";

const IconAndNote = props => (
    <div className="padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em">
        <h3 className="font-exo font-size-1p25em font-weight-600 text-center">{props.title}</h3>
        <div className="display-block margin-auto width-75pc">
            <figure className="font-exo font-weight-600 display-block margin-auto padding-bottom-1em text-center width-75pc">
                <img className="display-block margin-auto max-width-10em width-100pc" src={props.logoPath} alt={props.alt}></img>
                <figcaption className={"color-white display-block margin-auto max-width padding-bottom-p25em padding-top-p25em "+ props.labelColor}>{props.label}</figcaption>
            </figure>
        </div>
        <Note
            notes = {props.notes}
        />
    </div>
);

export default IconAndNote;