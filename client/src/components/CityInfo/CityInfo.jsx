import React from "react";
import "./CityInfo.css";
import LinksPanel from "../LinksPanel"

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
        <div className="padding-top-1em">
            <h2 className="font-exo font-size-1p75em font-weight-400 text-center">Links</h2>
            <LinksPanel
                links= {props.links}
            />
        </div>
        <div className="font-exo padding-bottom-1em padding-top-1em text-center">
            <h2 className="font-size-1p75em font-weight-400">Sections</h2>
            <a className="font-weight-600" href="#restaurants">
                <div className="bg-255-248-196 color-black padding-bottom-1em padding-top-1em">
                    <span>Bathrooms</span>
                </div>
            </a>
            <a className="font-weight-600" href="#restaurants">
                <div className="bg-90-79-120 color-white padding-bottom-1em padding-top-1em">
                    <span>Sites</span>
                </div>
            </a>
            <a className="font-weight-600" href="#restaurants">
                <div className="bg-0-92-0 color-white padding-bottom-1em padding-top-1em">
                    <span>Restaurants</span>
                </div>
            </a>
        </div>
    </section>
);

export default CityInfo;