import React from "react";
import "./CityHeading.css";

const CityHeading = props => (
    <div className="font-exo text-center">
        <h1>{props.cityName}</h1>
    </div>
);

export default CityHeading;