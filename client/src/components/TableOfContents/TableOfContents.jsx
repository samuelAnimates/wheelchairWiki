import React, { Component } from 'react';
import StickyDiv from "../StickyDiv"
import "./TableOfContents.css";

class TableOfContents extends Component {
    
    state = { 
        isDesktop: false
    }

    updateIsDesktop = () => {
        if(window.innerWidth>899){
            this.setState({
                isDesktop: true
            });
        }
        else{
            this.setState({
                isDesktop: false
            });
        }
    }

    componentDidMount() {
        this.updateIsDesktop();
        window.addEventListener('resize', this.updateIsDesktop);
    }

    render (){
        return(
            <div>
                {this.state.isDesktop &&
                    <StickyDiv>
                            <div className="bg-255-253-242 border-color border-style-solid border-width-2px display-block font-exo margin-auto max-width-17p5em padding-bottom-1p5em padding-left-1p5em padding-right-1p5em padding-top-1p5em">
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
                    </StickyDiv>
                }
                {this.state.isDesktop === false &&
                        <div className="bg-255-253-242 border-color border-style-solid border-width-2px display-block font-exo margin-auto max-width-17p5em padding-bottom-1p5em padding-left-1p5em padding-right-1p5em padding-top-1p5em">
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
                }
            </div>
    )}
}

export default TableOfContents;