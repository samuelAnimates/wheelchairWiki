import React, { Component } from "react";
import "./ResultContainer.css";
import ResultContainerBody from "../ResultContainerBody"
import ResultContainerHeader from "../ResultContainerHeader"
class ResultContainer extends Component {
    
    // Setting our component's initial state
    state = {
        city: {
            sites: [{
                        name: "SiteName",
                        entrance: {rating: 1, notes: "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
                        bathroom: {rating: 0, notes: "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
                        description: "wqretjyhtrghfsnghfhd sgdndgsdf sgddgsfng",
                        notes: "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
                    
                    }
                ],
            restaurants: [],
            bathrooms: []
        }
    };

    render(){
        return(
            <div className="bg-246-246-249 border-radius-p25-1p4-p75em border-style-solid border-width-2px box-shadow padding-bottom-1em width-100pc">
                <div>
                    <ResultContainerHeader
                        title= {this.state.city.sites[0].name}
                    />
                </div>
                <div>
                    <ResultContainerBody
                    site= {this.state.city.sites[0]}
                    />
                </div>
            </div>
        );
    }
};

export default ResultContainer;