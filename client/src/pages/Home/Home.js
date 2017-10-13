import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CityHeading from "../../components/CityHeading";
import CityInfo from "../../components/CityInfo";
import HomepageMapContainer from "../../components/HomepageMapContainer"
import MapContainer from "../../components/MapContainer";
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

  render() {
    return (
      <div>
          <CityHeading
            cityName="Wheelchair Travel Wiki"
          />
        <div className="float-left width-20pc">
          <CityInfo
          />
        </div>
        <div>
          <HomepageMapContainer
            cities={this.state.cities}
          />
            {this.state.cities.map(city=>{
              return (
                <div>
                  <h2>
                    <Link to={"/viewCity/" + city._id}>{city.name}</Link>
                  </h2>
                  <span>{city.country}</span>
                </div>
              )
            })}
        </div>
      </div>
    );
  }

}

export default Home;