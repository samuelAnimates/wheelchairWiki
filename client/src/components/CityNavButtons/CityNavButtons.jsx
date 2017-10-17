import React, { Component } from 'react';

const CityNavButtons = () => (
    <div className="font-exo padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em">
        <h2 className="font-size-1p75em font-weight-400 text-center">Sections</h2>
        <div id="cityNavbar"> 
            <a className="font-weight-600" href="#bathrooms">
                <button className="bg-255-248-196 navButton">
                    <div className="float-left text-right width-50pc">
                        <img className="text-right" src="../assets/icons/bathroom-circle-icon.svg" alt=""/>
                    </div>
                    <div className="float-left padding-bottom-1em padding-left-1em padding-top-1em width-50pc text-left">
                            <span>Bathrooms</span>
                    </div>
                </button>
            </a>
            <a className="font-weight-600" href="#sites">
                <button className="bg-90-79-120 color-white navButton">
                    <div className="float-left text-right width-50pc">
                        <img className="text-right" src="../assets/icons/site-circle-icon.svg" alt=""/>
                    </div>
                    <div className="float-left padding-bottom-1em padding-left-1em padding-top-1em width-50pc text-left">
                        <span>Sites</span>
                        </div>    
                </button>
            </a>
            <a className="font-weight-600 width-100pc" href="#restaurants">
                <button className="bg-0-92-0 color-white navButton">
                    <div className="float-left text-right width-50pc">
                        <img className="text-right" src="../assets/icons/restaurant-circle-icon.svg" alt=""/>
                    </div>
                    <div className="float-left padding-bottom-1em padding-left-1em padding-top-1em width-50pc text-left">
                        <span>Restaurants</span>
                    </div>
                </button>
            </a>
        </div>
    </div>
);

export default CityNavButtons;