import React from "react";
import "./ResultsSection.css";
import ResultContainer from "../ResultContainer";

const ResultsSection = props => (

        <div className="position-relative">
            <section className="float-left padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em width-50pc">
                <h2 className="font-exo font-size-2p5em font-weight-400 text-center">Sites</h2>
                {props.sites.map(result =>
                    <div className="padding-top-1em padding-bottom-1em">
                        <ResultContainer
                            site={result}
                            bgColor="bg-246-246-249"
                            headingBgColor="bg-90-79-120"
                        />
                    </div>
                )}   
            </section>
            <section className="float-left padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em width-50pc">
                <h2 className="font-exo font-size-2p5em font-weight-400 text-center">Restaurants</h2>
                {props.restaurants.map(result =>
                    <div className="padding-top-1em padding-bottom-1em">
                        <ResultContainer
                            site={result}
                            bgColor="bg-249-255-249"
                            headingBgColor="bg-0-92-0"
                        />
                    </div>
                )} 
            </section>
        </div>

);

export default ResultsSection;