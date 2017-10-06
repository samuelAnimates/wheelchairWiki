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
                        links: [{title: "Muui video review", url:"https://youtu.be/LIggt7h4e04"}]
                    },
                    {
                        name: "Ben Thanh Market (Chợ Bến Thành)",
                        entrance: {rating: 1, notes: "The main entrance on Le Loi street has a large threshold, so other entrances may be easier for wheelchair users."},
                        bathroom: {rating: 1, notes: "The wheelchair accessible bathrooms are located near door #8"},
                        description: "A large market filled with souvenirs, clothes, restaurant stalls, and groceries.",
                        notes: "The market is navigable for wheelchair users, but some aisles may be too narrow or too crowded. Additionally, some shops near the entrances are on raised platforms and thus are not accessible.", 
                        links: [{title: "Muui video review", url:"https://youtu.be/LIggt7h4e04"}]
                    }
                ],
            restaurants: [{
                            name: "Banh Xeo 335 (Bánh Xèo 335)",
                            entrance: {rating: 1, notes: "All of the restaurant's seating is outdoors at street level."},
                            bathroom: {rating: 0, notes: "The food stall doesn't have a restroom, and there isn't an accessible bathroom nearby."},
                            description: "A popular street food spot near Banana Farm Market that specializes in bánh xèo (savory pancakes).",
                            notes: "You might have to move some chairs around to make room at a table", 
                            links: [{title: "Muui video review", url:"https://youtu.be/u-NnHVTIc-k"}]
                        },
                        {
                            name: "Banh Xeo 335 (Bánh Xèo 335)",
                            entrance: {rating: 1, notes: "All of the restaurant's seating is outdoors at street level."},
                            bathroom: {rating: 0, notes: "The food stall doesn't have a restroom, and there isn't an accessible bathroom nearby."},
                            description: "A popular street food spot near Banana Farm Market that specializes in bánh xèo (savory pancakes).",
                            notes: "You might have to move some chairs around to make room at a table", 
                            links: [{title: "Muui video review", url:"https://youtu.be/u-NnHVTIc-k"}]
                        }
                ],
            bathrooms: []
        }
    };

    render(){
        return(
        <div className="position-relative">
            <section className="float-left padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em width-50pc">
                <h2 className="font-exo font-size-2p5em font-weight-400 text-center">Sites</h2>
                {this.state.city.sites.map(result =>
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
                {this.state.city.restaurants.map(result =>
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
    }
};

export default ResultsSection;