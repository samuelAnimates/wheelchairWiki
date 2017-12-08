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
                            City Overview
                            <ul className="padding-left-1p5em">
                                <li>Terrain</li>
                                <li>Transportation</li>
                            </ul>
                        </li>
                        <li>City Map</li>
                        <li>
                            City Site List
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