import React, { Component } from 'react';
import logo from './logo.svg';
import CityHeading from "./components/CityHeading";
import Legend from "./components/Legend";
import ResultsSection from "./components/ResultsSection";
import MapContainer from "./components/MapContainer";
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
                        links: [{title: "Muui video review", url:"https://youtu.be/LIggt7h4e04"}],
                        coordinates: {lat: 10.772939, long: 106.69839}
                    },
                    {
                      name: "Saigon Central Post Office (Bưu Điện trung tâm Sài Gòn)",
                      entrance: {rating: 0, notes: "The entrance is at the top of a small set of stairs"},
                      bathroom: {rating: 0, notes: ""},
                      description: "The main post office of Saigon.",
                      notes: "", 
                      links: [{title: "Muui video review", url:"https://youtu.be/2UiqRslHu_c"}],
                      coordinates: {lat: 10.7798294, long: 106.699882}
                    }
                ],
            restaurants: [{
                            name: "Banh Xeo 335 (Bánh Xèo 335)",
                            entrance: {rating: 1, notes: "All of the restaurant's seating is outdoors at street level."},
                            bathroom: {rating: 0, notes: "The food stall doesn't have a restroom, and there isn't an accessible bathroom nearby."},
                            description: "A popular street food spot near Banana Farm Market that specializes in bánh xèo (savory pancakes).",
                            notes: "You might have to move some chairs around to make room at a table", 
                            links: [{title: "Muui video review", url:"https://youtu.be/u-NnHVTIc-k"}],
                            coordinates: {lat: 10.7754405, long: 106.6824551}
                        },
                        {
                            name: "Nam Giao (Quán Nam Giao)",
                            entrance: {rating: 0.5, notes: "The entrance is not accessible, but there is outdoor seating at street level that is accessible."},
                            bathroom: {rating: 0, notes: ""},
                            description: "A restaurant in District 1 that serves Vietnamese Hue food.",
                            notes: "You might have to move some chairs around to make room at a table", 
                            links: [{title: "Muui video review", url:"https://youtu.be/lsFo7futqok"}],
                            coordinates: {lat: 10.7737275, long: 106.6984438}
                        }
                ],
            bathrooms: [
                        {
                            name: "Bitexco Tower ground floor bathroom",
                            notes: "Located in the shoppin center on the ground floor of the tower",
                            links: [],
                            coordinates: {lat: 10.7715939, long: 106.7044839}
                        },
                        {
                            name: "Tao Dan Park public bathroom",
                            notes: "Near the gate on Truong Dinh street. You may have to ask a staff person to unlock it.",
                            links: [],
                            coordinates: {lat: 10.7745951, long: 106.6932052}
                        },
            ]
        }
    }

  render() {
    return (
      <div>
          <CityHeading
            cityName={this.state.city.name}
          />
        <div className="float-left width-20pc">
          <CityHeading
            cityName={this.state.city.name}
          />
        </div>
        <main className="float-left width-80pc">
            <MapContainer
              mapCenter={this.state.city.coordinates}
              sites={this.state.city.sites}
              restaurants={this.state.city.restaurants}
              bathrooms={this.state.city.bathrooms}
            />
            <Legend/>
            <ResultsSection
              sites={this.state.city.sites}
              restaurants={this.state.city.restaurants}
              bathrooms={this.state.city.bathrooms}
            />
        </main>
      </div>
    );
  }

}

export default App;
