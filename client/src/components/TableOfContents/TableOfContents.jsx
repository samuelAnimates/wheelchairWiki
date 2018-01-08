import React, { Component } from 'react';
import StickyDiv from "../StickyDiv";
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
                    <div className="font-exo padding-left-1em">
                        <div className="margin-auto max-width-17em padding-bottom-1em">
                            <h2>Contents</h2>
                            <p className="font-exo font-size-p65em line-height-1em">Click on the links in the nav box below to jump to specific sections of this page. Press "n" on your keyboard to return to the nav box at any time.</p>
                        </div>
                        <div className="margin-auto max-width-17em padding-left-p5em padding-right-p5em">
                            <StickyDiv>
                                    <div>
                                        <nav className="bg-255-253-242 border-color border-style-solid border-width-2px display-block font-size-p85em padding-bottom-1em padding-left-p5em padding-right-p5em padding-top-1em" role="navigation">
                                            <div>
                                                <a href="#city-overview">1. City Overview</a>
                                                <ul className="padding-left-1p5em">
                                                    <li><a href="#city-overview-terrain">1.a Terrain</a></li>
                                                    <li><a href="#city-overview-transportation">1.b Transportation</a></li>
                                                    <li><a href="#city-overview-links">1.cLinks</a></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <a href="#city-map">2. City Map</a>
                                            </div>
                                            <div>
                                                <a href="#city-attractions">3. City Attractions</a>
                                                <ul className="padding-left-1p5em">
                                                    <li><a href="#bathrooms">3.a Public Accessible Bathrooms</a></li>
                                                    <li><a href="#sites">3.b Sites</a></li>
                                                    <li><a href="#restaurants">3.c Restaurants</a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>     
                            </StickyDiv>
                        </div>
                    </div>
                }
                {this.state.isDesktop === false &&
                    <div>
                        <div className="margin-auto max-width-17p5em padding-bottom-1em">
                            <h2 className="text-center">Contents</h2>
                            <p className="font-exo font-size-p65em line-height-1em">Click on the links in the nav box below to jump to specific sections of this page.</p>
                        </div>
                                <div className="font-exo margin-auto max-width-17p5em">
                                    <nav className="bg-255-253-242 border-color border-style-solid border-width-2px display-block font-size-p85em padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em" role="navigation">
                                        <div>
                                            <a href="#city-overview">1. City Overview</a>
                                            <ul className="padding-left-1p5em">
                                                <li><a href="#city-overview-terrain">1.a Terrain</a></li>
                                                <li><a href="#city-overview-transportation">1.b Transportation</a></li>
                                                <li><a href="#city-overview-links">1.cLinks</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <a href="#city-map">2. City Map</a>
                                        </div>
                                        <div>
                                            <a href="#city-attractions">3. City Attractions</a>
                                            <ul className="padding-left-1p5em">
                                                <li><a href="#bathrooms">3.a Public Accessible Bathrooms</a></li>
                                                <li><a href="#sites">3.b Sites</a></li>
                                                <li><a href="#restaurants">3.c Restaurants</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>     
                    </div>    
                }
            </div>
    )}
}

export default TableOfContents;