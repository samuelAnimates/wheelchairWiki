import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CityHeading from "../../components/CityHeading";
import GradientBackground from "../../components/GradientBackground";
import HomepageMapContainer from "../../components/HomepageMapContainer";
import LogInSignOutButton from "../../components/LogInSignOutButton";
import API from "../../utils/API.js";
import './Home.css';

class Home extends Component {

  state = {
    cities: [{"_id":"59dece6bbfc7ef2dcc71e691","name":"Ho Chi Minh City","country":"Vietnam","latitude":106.660172,"longitude":10.762622}]
  }

  componentDidMount(){
    this.getAllCities();
  }

  getAllCities = () => {
    API.getAllCities()
    .then(res =>{
      this.setState({ cities: res.data});
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
      <div className="width-100pc">
          <GradientBackground>
            <div className="text-center width-100pc">
              <CityHeading
                cityName="Wheelchair Travel A11Y Wiki"
                countryName="A collaborative wheelchair travel accessibility (A11Y) guide"
              />
              <div className="padding-top-1em">
                <LogInSignOutButton
                  logOut = {this.logOut}
                />
              </div>
            </div>
          </GradientBackground>
        <div>
        </div>
        <div className="padding-top-1em">
          <h2 className="text-center">Cities Map</h2>
          <div className="font-opensans text-center">
            <span>Click the button below to see a map of this city's reviewed sites, or </span>
            <br/>
            <a href="#cities-list">click here to skip past the map view and jump to the list view of this city's sites.</a>
          </div>
          <HomepageMapContainer
            cities={this.state.cities}
          />
        </div>
        <div className="display-block margin-auto padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em width-60pc">
          <h2 className="text-center" id="cities-list">Cities List</h2>
            <div className="padding-bottom-1em padding-top-1em text-center">
            {this.state.cities.map(city=>{
              return (
                <div className="font-opensans padding-bottom-1em width-100pc border-bottom-gray">
                  <h3 className="font-size-1p5em">
                    <Link to={"/viewCity/" + city._id}>{city.name}</Link>
                  </h3>
                  <span>{city.country}</span>
                </div>
              )
            })}
            </div>
        </div>
      </div>
    );
  }

}

export default Home;