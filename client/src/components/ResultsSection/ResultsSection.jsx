import React from "react";
import "./ResultsSection.css";
import ResultContainer from "../ResultContainer";
import BathroomContainer from "../BathroomContainer";

const ResultsSection = props => (

        <div className="position-relative" id="resultsSection">
            <h2 className="text-center">RESULTS SECTION</h2>
            <section className="padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em width-100pc">
                <h3 className="text-center" id="bathrooms">Public Accessible Bathrooms</h3>
                {props.bathrooms.map(result =>
                    <div className="padding-top-1em padding-bottom-1em">
                        <BathroomContainer
                            bathroom={result}
                            bgColor="bg-255-253-242"
                            headingBgColor="bg-255-248-196"
                            fontColor="color-black"
                            key={result._id}
                        />
                    </div>
                )}   
            </section>
            <section className="padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em width-100pc">
                <h3 className="text-center" id="sites">Sites</h3>
                {props.sites.map(result =>
                    <div className="padding-top-1em padding-bottom-1em">
                        <ResultContainer
                            site={result}
                            bgColor="bg-246-246-249"
                            headingBgColor="bg-90-79-120"
                            fontColor="color-white"
                            key={result._id}
                        />
                    </div>
                )}   
            </section>
            <section className="padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em width-100pc">
                <h3 className="text-center" id="restaurants">Restaurants</h3>
                {props.restaurants.map(result =>
                    <div className="padding-top-1em padding-bottom-1em">
                        <ResultContainer
                            site={result}
                            bgColor="bg-249-255-249"
                            headingBgColor="bg-0-92-0"
                            fontColor="color-white"
                            key={result._id}
                        />
                    </div>
                )} 
            </section>
        </div>

);

export default ResultsSection;