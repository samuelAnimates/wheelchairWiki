import React from "react";

const Note = props => (
    <div className="font-opensans font-weight-400 padding-top-1em">
        <p className="font-size-p75em"><span className="font-size-1p25em font-weight-600">Notes: </span>{props.notes}</p>
    </div>
);

export default Note;