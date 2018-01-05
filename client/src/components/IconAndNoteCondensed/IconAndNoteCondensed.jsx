import React from "react";
import "./IconAndNoteCondensed.css";
import NoteCondensed from "../NoteCondensed";

const IconAndNoteCondensed = props => (
    <div className="padding-bottom-p25em padding-left-1em padding-right-p5em float-left width-100pc">
        <div className="display-block padding-top-p5em text-center">
            <h5 className="text-center">{props.title}</h5>
            <div className="display-inline-block padding-bottom-p25em padding-top-p25em text-center">
                <img className="display-inline max-width-10em height-1p1em position-relative text-center top-p35em" src={props.logoPath} alt={props.alt}></img>&nbsp;
                <div className={"color-white display-inline-block font-exo padding-bottom-p25em padding-top-p25em text-center " + props.labelColor}>
                    {props.label}
                </div>
            </div>
        </div>
        <div className="clear-both padding-top-p25em">
            <NoteCondensed
                notes = {props.notes}
            />
        </div>
    </div>
);

export default IconAndNoteCondensed;