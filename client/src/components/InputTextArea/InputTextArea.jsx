import React from "react";
import "./InputTextArea.css";

const InputTextArea = props => {
    return (
        <div className="display-inlineblock">
            <div className="float-left font-monospace padding-right-p25em text-right width-9em" id={"overallNotes-" + props.containerId}>
                {props.label}
            </div>
            <div className="float-left text-left">
                <textarea className="font-monospace" aria-labelledby={"overallNotes-" + props.containerId} value={props.value} form={props.form} name={props.name} onInput={props.onInput} rows="4" cols="50"/>
            </div>
        </div>
)}

export default InputTextArea;