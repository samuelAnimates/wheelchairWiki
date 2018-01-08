import React from "react";

const Legend = props =>(
    <div className="text-center">
        <h4 className="font-exo text-center">Legend</h4>
        <figure className="display-inline-block padding-left-p25em padding-right-p25em">
            <img src="../assets/icons/site-icon.svg" alt="Site Icon"></img>
            <figcaption className="font-opensans">Site</figcaption>
        </figure>
        <figure className="display-inline-block padding-left-p25em padding-right-p25em">
            <img src="../assets/icons/restaurant-icon.svg" alt="Restaurant Icon"></img>
            <figcaption className="font-opensans">Resturant</figcaption>
        </figure>
        <figure className="display-inline-block padding-left-p25em padding-right-p25em">
            <img src="../assets/icons/bathroom-icon.svg" alt="Public Accessible Bathroom Icon"></img>
            <figcaption className="font-opensans">Bathroom</figcaption>
        </figure>
    </div>
);

export default Legend;