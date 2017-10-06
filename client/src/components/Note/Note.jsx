import React from "react";

const Note = props => (
    <table className="font-opensans">
        <tr>
            <td className="font-size-1em font-weight-600">Notes</td>
            <td className="font-size-p75em font-weight-400 padding-left-p25em">{props.notes}</td>
        </tr>
    </table>
);

export default Note;