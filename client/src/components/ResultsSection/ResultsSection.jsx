import React, { Component } from "react";
import "./ResultsSection.css";
import ResultContainer from "../ResultContainer";

class ResultsSection extends Component {
    
    // Setting our component's initial state
    state = {
        city: {
            sites: [{
                        name: "Ben Thanh Market (Chợ Bến Thành)",
                        entrance: {rating: 1, notes: "The main entrance on Le Loi street has a large threshold, so other entrances may be easier for wheelchair users."},
                        bathroom: {rating: 1, notes: "The wheelchair accessible bathrooms are located near door #8"},
                        description: "A large market filled with souvenirs, clothes, restaurant stalls, and groceries.",
                        notes: "The market is navigable for wheelchair users, but some aisles may be too narrow or too crowded. Additionally, some shops near the entrances are on raised platforms and thus are not accessible.", 
                        links: [{title: "Muui video review", url:""}]
                    }
                ],
            restaurants: [{
                        name: "Banh Xeo 335 (Bánh Xèo 335)",
                        entrance: {rating: 1, notes: "All of the restaurant's seating is outdoors at street level."},
                        bathroom: {rating: 0, notes: "The food stall doesn't have a restroom, and there isn't an accessible bathroom nearby."},
                        description: "A popular street food spot near Banana Farm Market that specializes in bánh xèo (savory pancakes).",
                        notes: "You might have to move some chairs around to make room at a table", 
                        links: [{title: "Muui video review", url:""}]
                    }
                ],
            bathrooms: []
        }
    };

    render(){
        return(
        <div>
            <section>
                <ResultContainer
                    site={this.state.city.sites[0]}
                />
            </section>
            <section>
                <ResultContainer
                    site={this.state.city.restaurants[0]}
                />
            </section>
        </div>
        );
    }
};

export default ResultsSection;