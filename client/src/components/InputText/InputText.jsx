import React from "react";
import "./InputText.css";

const InputText = props => {
    return (
        <div className="display-inlineblock font-monospace">
            <div className="float-left padding-right-p25em text-right width-9em">
                {props.label}
            </div>
            <div className="float-left text-left">
                <input className="font-monospace" form="props.form" type="text" size="50" {...props}/>
            </div>
        </div>
)}

export default InputText;