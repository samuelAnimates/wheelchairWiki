import React, { Component } from 'react';
import "./TableOfContents.css";

class TableOfContents extends Component {
    
    scrollToId = (sectionId) => {
        let element = document.getElementById(sectionId);
        element.scrollIntoView();
    }

    render (){
        return(
            <div className="display-block font-exo margin-auto width">
                <h2>Contents</h2>
                <div className="font-size-p85em">
                    <ul>
                        <li>
                            <a href="#city-overview">City Overview</a>
                            <ul className="padding-left-1p5em">
                                <li><a href="#city-overview-terrain">Terrain</a></li>
                                <li><a href="#city-overview-transportation">Transportation</a></li>
                                <li><a href="#city-overview-links">Links</a></li>
                            </ul>
                        </li>
                        <li><a href="#city-map">City Map</a></li>
                        <li>
                            <a href="#city-attractions">City Attractions</a>
                            <ul className="padding-left-1p5em">
                                <li><a href="#bathrooms">Public Accessible Bathrooms</a></li>
                                <li><a href="#sites">Sites</a></li>
                                <li><a href="#restaurants">Restaurants</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
    )}
}

export default TableOfContents;