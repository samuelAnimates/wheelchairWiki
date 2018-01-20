import React from "react";
import "./InputTextArea.css";

const InputTextArea = props => {
    return (
        <div className="display-inlineblock">
            <div className="float-left font-monospace padding-right-p25em text-right width-9em" id={"overall-notes-" + props.containerId}>
                {props.label}
            </div>
            <div className="float-left text-left">
                <textarea className="font-monospace" arialabelledby={"overall-notes-" + props.containerId} form={props.form} name={props.name} rows="4" cols="50">
                    {props.value}
                </textarea>
            </div>
        </div>
)}

export default InputTextArea;