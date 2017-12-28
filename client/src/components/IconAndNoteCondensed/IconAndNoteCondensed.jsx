import React from "react";
import "./IconAndNoteCondensed.css";
import Note from "../Note";

const IconAndNoteCondensed = props => (
    <div className="padding-bottom-p25em padding-left-1em padding-right-p5em float-left width-100pc">
        <div className="display-block padding-top-p5em">
            <h5 className="display-inline text-left">{props.title}:</h5>&nbsp;
            <div className="display-inline-block">
                <div className="display-inline font-exo padding-bottom-p25em padding-top-p25em text-left">
                    {props.label}
                </div>
                &nbsp;<img className="display-inline max-width-10em text-left width-1p5em" src={props.logoPath} alt={props.alt}></img>
            </div>
        </div>
        <div className="clear-both padding-top-p25em">
            <Note
                notes = {props.notes}
            />
        </div>
    </div>
);

export default IconAndNoteCondensed;