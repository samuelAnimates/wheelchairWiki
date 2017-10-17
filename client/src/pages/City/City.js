import React, { Component } from 'react';
import CityHeading from "../../components/CityHeading";
import CityInfo from "../../components/CityInfo";
import CityNavButtons from "../../components/CityNavButtons";
import LogInSignOutButton from "../../components/LogInSignOutButton";
import Legend from "../../components/Legend";
import ResultsSection from "../../components/ResultsSection";
import MapContainer from "../../components/MapContainer";
import { StickyContainer, Sticky} from 'react-sticky';
import API from "../../utils/API.js";
import './City.css';

class City extends Component {
  
  // Setting our component's initial state. Hardcoding truncated "Saigon" data as the the initial city to load in case of asynch sideeffects with the AJAX call.
  state = { 
    city: {"_id":"59dece6bbfc7ef2dcc71e691","name":"Saigon","country":"Vietnam","latitude":106.660172,"longitude":10.762622,"transportation":"The city buses are not accessible, so wheelchair users will have to rely on taxis to get around. It may be difficult to coordinate for a taxi van, which is a barrier for power wheelchair users and in cases where transferring from a chair to a car is difficult. There are Vietnamese-language apps for hailing taxis from VinaSun and Mai Linh. Uber also operates in Vietnam as an option for people who can't read Vietnamese. Keep in mind that the traffic is notoriously bad and there are few traffic lights in the city, so use caution if you're visiting for the first time.","terrain":"Because the sidewalks of Ho Chi Minh City are often crowded with people and motorbikes, pedestrians often walk in the road as well. Wheelchair users may find this easier than navigating around motobikes and inconsistent curb cuts. Note that there aren't many traffic lights in the city, so caution should be used when traveling on the road.","__v":0,"bathrooms":[{"_id":"59dece6bbfc7ef2dcc71e6c6","name":"Public Bathroom at Ben Thanh Market Door #8","notes":"The entrance to the public wheelchair accessible bathroom is located near Door #8 (the west entrance) on Phan Chu Trinh sctreet, across from Baby Spoon restaurant.","longitude":106.6974619,"latitude":10.7725662,"__v":0,"links":[]},{"_id":"59dece6bbfc7ef2dcc71e6d0","name":"23/9 Park public bathroom","notes":"","longitude":106.695642,"latitude":10.769702,"__v":0,"links":[]}],"restaurants":[{"_id":"59dece6bbfc7ef2dcc71e6b9","name":"Co Tam Kitchen","description":"A popular restaurant serving food from all over Vietnam.","notes":"It is in a small space that can get very crowded, so we recommend making a reservation.","entrance":1,"entranceNotes":"The entrance is accessible, but you may need to ask for motorbikes to be moved away from the entrance ramp.","bathroom":0,"longitude":106.703858,"latitude":10.7718442,"__v":0,"links":[{"title":"Muui Video Review","_id":"59dece6bbfc7ef2dcc71e6ba"}]},{"_id":"59dece6bbfc7ef2dcc71e6c4","name":"Banh Xeo 335 (Bánh Xèo 335)","description":"A popular street food spot near Banana Farm Market that only sells bánh xèo (savory pancakes).","notes":"","entrance":1,"entranceNotes":"All of the restaurant's seating is outdoors at street level.","bathroom":0,"longitude":106.6824551,"latitude":10.7754405,"__v":0,"links":[{"title":"Muui Video Review","_id":"59dece6bbfc7ef2dcc71e6c5"}]}],"sites":[{"_id":"59dece6bbfc7ef2dcc71e693","name":"Ben Thanh Market (Chợ Bến Thành)","description":"A large market filled with souvenirs, clothes, restaurant stalls, and groceries.","notes":"The market is navigable for wheelchair users, but some aisles may be too narrow or too crowded. Additionally, some shops near the entrances are on raised platforms and thus are not accessible.","entrance":1,"entranceNotes":"The main entrance on Le Loi street has a large threshold, so other entrances may be easier for wheelchair users.","bathroom":1,"bathroomNotes":"The wheelchair accessible bathrooms are located near door #8","longitude":106.69839,"latitude":10.772939,"__v":0,"links":[{"title":"Muui Video Review","url":"https://youtu.be/LIggt7h4e04","_id":"59dece6bbfc7ef2dcc71e694"}]},{"_id":"59dece6bbfc7ef2dcc71e6b7","name":"Japantown","description":"A series of small alleyways with coffeeshops, Japanese food, and street art.","notes":"Japantown itself is accessible, but there is no wheelchair accessible restroom. Many of the restaurants and coffeeshops have street level tables outdoors if you want to grab a snack, but there doesn't seem to be a fully accessible restaurant in the area.","entrance":1,"entranceNotes":"","bathroom":0,"bathroomNotes":"","longitude":106.7050123,"latitude":10.77898,"__v":0,"links":[{"title":"Muui Video Review","url":"https://youtu.be/8XNUZ-TLrBE","_id":"59dece6bbfc7ef2dcc71e6b8"}]}],"links":[{"url":"https://wikitravel.org/en/Ho_Chi_Minh_City","title":"Travel Wiki Page for Ho Chi Minh City","_id":"59dece6bbfc7ef2dcc71e692"}]}   
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount(){
    this.getCity(this.props.match.params.id);
  }

  getCity = (id) => {
    API.getCity(id)
    .then(res =>{
      this.setState({ city: res.data});
    })
    .catch(err => console.log(err));
  }

  logOut = () => {
    console.log("made ithere0");
    localStorage.removeItem("token");
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
          <div className="float-right">
            <LogInSignOutButton
              logOut = {this.logOut}
            />
          </div>
          <div className="clear-both">
            <CityHeading
              cityName={this.state.city.name}
              countryName={this.state.city.country}
            />
          </div>
          <div className="float-left responsive-one-third-container">
            <CityInfo
              transportationInfo={this.state.city.transportation}
              terrainInfo={this.state.city.terrain}
              links={this.state.city.links}
            />
            <CityNavButtons/>
          </div>
          <main className="float-left responsive-two-thirds-container">
              <MapContainer
                mapCenter={[this.state.city.longitude, this.state.city.latitude]}
                sites={this.state.city.sites}
                restaurants={this.state.city.restaurants}
                bathrooms={this.state.city.bathrooms}
              />
              <div className="display-block margin-auto">
                <Legend/>
              </div>
              <ResultsSection
                displaySiteEditPopup={this.displaySiteEditPopup}
                sites={this.state.city.sites}
                restaurants={this.state.city.restaurants}
                bathrooms={this.state.city.bathrooms}
              />
          </main>
      </div>
    );
  }

}

export default City;