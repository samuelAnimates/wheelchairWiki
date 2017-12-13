import React from "react";
import "./CityOverview.css";
import LinksPanel from "../LinksPanel";

const CityInfo = props => (
    <section className="padding-bottom-1em padding-left-1em padding-right-1em">
        <h2 className="text-center" id="city-overview">City Overview</h2>
        <div>
            <h3 className="text-center" id="city-overview-terrain">Terrain</h3>
            <p className="font-opensans padding-bottom-1em padding-top-1em">{props.terrainInfo}</p>
        </div>
        <div className="padding-top-1em">
            <h3 className="text-center" id="city-overview-transportation">Transportation</h3>
            <p className="font-opensans padding-bottom-1em padding-top-1em">{props.transportationInfo}</p>
        </div>
        <div className="padding-top-1em">
            <h3 className="text-center" id="city-overview-links">Links</h3>
            <LinksPanel
                links= {props.links}
            />
        </div>
    </section>
);

export default CityInfo;