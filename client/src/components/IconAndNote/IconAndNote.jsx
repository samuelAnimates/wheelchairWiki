import React from "react";
import "./IconAndNote.css";

const IconAndNote = props => (
    <div className="padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em">
        <h3 className="font-exo font-size-1p25em font-weight-600 text-center">{props.title}</h3>
        <div className="display-block margin-auto width-50pc">
            <img className="display-block margin-auto max-width width-100pc" src="../assets/icons/accessible.svg"></img>
        </div>
        <div className="font-opensans font-weight-400 padding-top-1em">
            <p className="font-size-p75em"><span className="font-size-1p25em font-weight-600">Notes: </span>{props.notes}</p>
        </div>
    </div>
);

export default IconAndNote;