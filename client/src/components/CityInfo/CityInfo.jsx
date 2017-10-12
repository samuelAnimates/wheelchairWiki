import React from "react";
import "./CityInfo.css";

const CityInfo = props => (
    <div>
        <h2>Terrain</h2>
        <p>{props.terrainInfo}</p>
        <h2>Transportation</h2>
        <p>{props.transportationInfo}</p>
    </div>
);

export default CityInfo;