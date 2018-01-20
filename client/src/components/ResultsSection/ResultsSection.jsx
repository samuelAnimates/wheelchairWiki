import React, { Component } from 'react';
import "./ResultsSection.css";
import ResultContainer from "../ResultContainer";
import ResultContainerCondensed from "../ResultContainerCondensed";
import BathroomContainer from "../BathroomContainer";

class ResultsSection extends Component {

    state = { 
        isDesktop: false
    }

    componentDidMount() {
        this.updateIsDesktop();
        window.addEventListener('resize', this.updateIsDesktop);
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

    render (){
        return(
            <div>
                {this.state.isDesktop &&
                    <div className="position-relative" id="resultsSection">
                        <h2 className="text-center" id="city-attractions">City Attractions A11Y</h2>
                        <section className="padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em width-100pc">
                            <h3 className="text-center" id="bathrooms">Public Accessible Bathrooms</h3>
                            {this.props.bathrooms.map(result =>
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
                            {this.props.sites.map(result =>
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
                            {this.props.restaurants.map(result =>
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
                }
                {this.state.isDesktop === false &&
                    <div className="position-relative" id="resultsSection">
                        <h2 className="text-center" id="city-attractions">City Attractions</h2>
                        <section className="padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em width-100pc">
                            <h3 className="text-center" id="bathrooms">Public Accessible Bathrooms</h3>
                            {this.props.bathrooms.map(result =>
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
                            {this.props.sites.map(result =>
                                <div className="padding-top-1em padding-bottom-1em">
                                    <ResultContainerCondensed
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
                            {this.props.restaurants.map(result =>
                                <div className="padding-top-1em padding-bottom-1em">
                                    <ResultContainerCondensed
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
                }
            </div>
        )}

}

export default ResultsSection;