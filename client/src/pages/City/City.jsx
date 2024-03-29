import React, { Component } from 'react';
import CityHeading from "../../components/CityHeading";
import CityOverview from "../../components/CityOverview";
import Header from "../../components/Header";
import HomeButton from "../../components/HomeButton";
import LogInSignOutButton from "../../components/LogInSignOutButton";
import MapContainer from "../../components/MapContainer";
import ResultsSection from "../../components/ResultsSection";
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton'
import TableOfContents from "../../components/TableOfContents";
import API from "../../utils/API.js";
import './City.css';
;

class City extends Component {
  
  // Hardcoding a null city
  state = { 
    city: null  
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
        {this.state.city === null &&
          <div>
            <Header>
                  <CityHeading
                    cityName="Wheelchair Travel Wiki"
                    countryName=""
                  />
                <div className="padding-top-1em">
                  <div className="display-inline padding-right-p5em">
                    <HomeButton/>
                  </div>
                </div>
            </Header>
            <main className="font-exo padding-top-10em text-center" role="main">
              <div role="status">Loading city data...</div>
            </main>
          </div>
          
        }
        {this.state.city != null &&
          <div>
                <Header>
                    <CityHeading
                      cityName={this.state.city.name}
                      countryName={this.state.city.country}
                    />
                  <div className="padding-top-1em">
                    <div className="display-inline padding-right-p5em">
                      <HomeButton/>
                    </div>
                    <div className="display-inline padding-left-p5em">
                      <LogInSignOutButton
                        logOut = {this.logOut}
                      />
                    </div>
                  </div>
                </Header>
                <div className="float-left padding-bottom-1em padding-left-1em padding-right-1em padding-top-1em responsive-one-third-container">
                  <TableOfContents/>
                </div>
                <main className="float-left padding-top-1em responsive-two-thirds-container">
                    <section className="padding-bottom-1em padding-top-1em">
                      <CityOverview
                        transportationInfo={this.state.city.transportation}
                        terrainInfo={this.state.city.terrain}
                        links={this.state.city.links}
                      />
                    </section>
                    <section className="padding-bottom-1em padding-top-1em">
                      <MapContainer
                        mapCenter={[this.state.city.longitude, this.state.city.latitude]}
                        sites={this.state.city.sites}
                        restaurants={this.state.city.restaurants}
                        bathrooms={this.state.city.bathrooms}
                      />
                    </section>
                    <section className="padding-bottom-1em padding-top-1em">
                      <ResultsSection
                        displaySiteEditPopup={this.displaySiteEditPopup}
                        sites={this.state.city.sites}
                        restaurants={this.state.city.restaurants}
                        bathrooms={this.state.city.bathrooms}
                      />
                    </section>
                    <ScrollToTopButton/>
                </main>
          </div>
        }
      </div>
    );
  }

}

export default City;