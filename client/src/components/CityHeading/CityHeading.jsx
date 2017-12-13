import React from "react";
import "./CityHeading.css";

const CityHeading = props => (
    <div className="font-exo text-center gradient">
        <h1><img className="display-inline height-p75em" src="../assets/icons/logo.svg" alt="Wheelchair Travel Wiki logo"/>{props.cityName}</h1>
        <div className="padding-top-p5em"><span>{props.countryName}</span></div>
    </div>
);

export default CityHeading;