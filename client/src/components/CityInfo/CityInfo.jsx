import React from "react";
import "./CityInfo.css";

const CityInfo = props => (
    <section className="padding-bottom-1em padding-left-1em padding-right-1em">
        <div>
            <h2 className="font-exo font-size-1p75em font-weight-400 text-center">Terrain</h2>
            <p className="font-opensans padding-bottom-1em padding-top-1em">{props.terrainInfo}</p>
        </div>
        <div className="padding-top-1em">
            <h2 className="font-exo font-size-1p75em font-weight-400 text-center">Transportation</h2>
            <p className="font-opensans padding-bottom-1em padding-top-1em">{props.transportationInfo}</p>
        </div>
    </section>
);

export default CityInfo;