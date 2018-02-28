import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CityHeading from "../../components/CityHeading";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
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
          <Header>
                <CityHeading
                  cityName="Wheelchair Travel A11Y Wiki"
                  countryName="A collaborative wheelchair travel accessibility (A11Y) guide"
                />
                <div className="padding-top-1em">
                  <LogInSignOutButton
                    logOut = {this.logOut}
                  />
                </div>
          </Header>
        <main className="padding-bottom-2em padding-left-2em padding-right-2em">
          <div>
            <h2 className="text-center">Intro</h2>
            <div className="display-block font-opensans margin-auto text-center width-60pc">
              <p>Wheelchair A11Y Wiki is the demo of a wheelchair travel accessibility wiki, meant to serve as a city-by-city guide to travel for wheelchair users.</p>
            </div>
          </div>
          <div className="padding-top-1em">
            <h2 className="text-center">Cities Map</h2>
            <div className="display-block font-opensans margin-auto text-center width-60pc">
              <p>
                <span>Click the button below to see a map of this city's reviewed sites, or </span>
                <a href="#cities-list">click here to skip past the map view and jump to the list view of this city's sites.</a>
              </p>
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
        </main>
        <Footer/>
      </div>
    );
  }

}

export default Home;