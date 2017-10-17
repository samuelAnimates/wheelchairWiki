import React from "react";
import "./CityHeading.css";

const CityHeading = props => (
    <div className="font-exo text-center padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em">
        <h1 className="font-weight-600 font-size-3em">{props.cityName}</h1>
        <span>{props.countryName}</span>
    </div>
);

export default CityHeading;