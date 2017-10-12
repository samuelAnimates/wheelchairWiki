import React from "react";
import "./CityHeading.css";

const CityHeading = props => (
    <div className="font-exo text-center">
        <h1 className="font-weight-600 font-size-3em">{props.cityName}</h1>
        <span>{props.countryName}</span>
    </div>
);

export default CityHeading;