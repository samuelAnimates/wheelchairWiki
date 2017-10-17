import React, {Component} from 'react';
import StickyDiv from "../StickyDiv"

class CityNavButtons extends Component {

    render() {
        return (
        <div className="font-exo padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em">
            <h2 className="font-size-1p75em font-weight-400 text-center">Sections</h2>
            <StickyDiv>

                <div id="navButtons"> 
                    <a className="font-weight-600" href="#bathrooms">
                        <button className="bg-255-248-196 navButton">
                            <div className="float-left text-right width-20pc">
                                <img className="text-right" src="../assets/icons/bathroom-circle-icon.svg" alt="Bathroom Icon"/>
                            </div>
                            <div className="float-left padding-bottom-1em padding-top-1em width-80pc text-center">
                                    <span>Bathrooms</span>
                            </div>
                        </button>
                    </a>
                    <a className="font-weight-600" href="#sites">
                        <button className="bg-90-79-120 color-white navButton">
                            <div className="float-left text-right width-20pc">
                                <img className="text-right" src="../assets/icons/site-circle-icon.svg" alt="Site Icon"/>
                            </div>
                            <div className="float-left padding-bottom-1em padding-top-1em width-80pc text-center">
                                <span>Sites</span>
                                </div>    
                        </button>
                    </a>
                    <a className="font-weight-600 width-100pc" href="#restaurants">
                        <button className="bg-0-92-0 color-white navButton">
                            <div className="float-left text-right width-20pc">
                                <img className="text-right" src="../assets/icons/restaurant-circle-icon.svg" alt="Restaurant Icon"/>
                            </div>
                            <div className="float-left padding-bottom-1em padding-top-1em width-80pc text-center">
                                <span>Restaurants</span>
                            </div>
                        </button>
                    </a>
                </div>

            </StickyDiv>
        </div>
    )}
};

export default CityNavButtons;