import React from "react";
import "./InputText.css";

const InputText = props => {
    return (
        <div className="display-inlineblock">
            <div className="float-left padding-right-p25em text-right width-8em">
                {props.label}
            </div>
            <div className="float-left text-left">
                <input type="text" {...props}/>
            </div>
        </div>
)}

export default InputText;