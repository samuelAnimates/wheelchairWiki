import React from "react";
import "./GradientBackground.css";

const GradientBackground = props => (
    <div className="padding-all-1em gradient ">
        {props.children}
    </div>
);

export default GradientBackground;