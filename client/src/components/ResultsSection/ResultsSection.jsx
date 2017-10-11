import React from "react";
import "./ResultsSection.css";
import ResultContainer from "../ResultContainer";
import BathroomContainer from "../BathroomContainer";

const ResultsSection = props => (

        <div className="position-relative">
            <section className="padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em width-100pc">
                <h2 className="font-exo font-size-2p5em font-weight-400 text-center">Public Accessible Bathrooms</h2>
                {props.bathrooms.map(result =>
                    <div className="padding-top-1em padding-bottom-1em">
                        <BathroomContainer
                            bathroom={result}
                            bgColor="bg-255-253-242"
                            headingBgColor="bg-255-248-196"
                            fontColor="color-black"
                        />
                    </div>
                )}   
            </section>
            <section className="padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em width-100pc">
                <h2 className="font-exo font-size-2p5em font-weight-400 text-center">Sites</h2>
                {props.sites.map(result =>
                    <div className="padding-top-1em padding-bottom-1em">
                        <ResultContainer
                            site={result}
                            bgColor="bg-246-246-249"
                            headingBgColor="bg-90-79-120"
                            fontColor="color-white"
                        />
                    </div>
                )}   
            </section>
            <section className="padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em width-100pc">
                <h2 className="font-exo font-size-2p5em font-weight-400 text-center">Restaurants</h2>
                {props.restaurants.map(result =>
                    <div className="padding-top-1em padding-bottom-1em">
                        <ResultContainer
                            site={result}
                            bgColor="bg-249-255-249"
                            headingBgColor="bg-0-92-0"
                            fontColor="color-white"
                        />
                    </div>
                )} 
            </section>
        </div>

);

export default ResultsSection;