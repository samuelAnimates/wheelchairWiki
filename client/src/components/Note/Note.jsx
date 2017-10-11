import React from "react";

const Note = props => (
    <div className="font-opensans padding-top-p25em">
        <p className="font-size-p75em font-weight-400"><span className="font-size-1em font-weight-600">Notes: </span>{props.notes}</p>
    </div>
);

export default Note;