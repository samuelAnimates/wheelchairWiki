import React, { Component } from 'react';
import logo from './logo.svg';
import CityHeading from "./components/CityHeading";
import MapContainer from "./components/MapContainer";
import ResultsSection from "./components/ResultsSection";
import './App.css';

class App extends Component {
  
  // Setting our component's initial state
  state = {
        city: {
            name: "Ho Chi Minh City",
            coordinates: {lat: 106.62965, long: 10.82302 },
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
    }

  render() {
    return (
      <div>
        <CityHeading
          cityName={this.state.city.name}
        />
        <MapContainer
          cityLat = {this.state.city.coordinates.lat}
          cityLong = {this.state.city.coordinates.long}
        />
        <ResultsSection
          sites={this.state.city.sites}
          restaurants={this.state.city.restaurants}
        />
      </div>
    );
  }

}

export default App;
