import React from "react";
import "./CityHeading.css";

const CityHeading = props => (
    <div className="font-exo text-center gradient">
        <h1 className="font-weight-600 font-size-3em"><img className="display-inline height" src="../assets/icons/logo.svg" alt="Wheelchair Travel Wiki logo"/>{props.cityName}</h1>
        <span>{props.countryName}</span>
    </div>
);

export default CityHeading;