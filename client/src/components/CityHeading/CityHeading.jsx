import React from "react";
import "./CityHeading.css";

const CityHeading = props => (
    <div className="font-exo font-weight-600 font-size-3em text-center">
        <h1>{props.cityName}</h1>
    </div>
);

export default CityHeading;