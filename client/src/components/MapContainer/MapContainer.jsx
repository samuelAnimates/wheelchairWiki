import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "./MapContainer.css";
import BathroomIcon from "../BathroomIcon"
import RestaurantIcon from "../RestaurantIcon"
import SiteIcon from "../SiteIcon"

const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const zoomLevel = 11;


class MapContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {sites: this.props.sites, restaurants: this.props.restaurants};
    }

    render() {
        return (
            <div className="display-block margin-auto">
                <div className="padding-bottom-1em padding-top-1em text-center">
                    <h2  id="city-map">City Map</h2>
                    <a className="font-opensans" href="#resultsSection">Click here to skip past the map view and jump to the list view of this city's sites.</a>
                </div>
                <Map
                    center={this.props.mapCenter}
                    zoom={zoomLevel}
                >
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles}
                    />
                    {
                        this.props.sites.map(result =>{
                            return (
                                <Marker
                                    icon={SiteIcon}
                                    position={[result.latitude, result.longitude]}
                                >
                                    <Popup>
                                        <span>{result.name}</span>
                                    </Popup>
                                </Marker>
                            )
                        })
                    }
                    {
                        this.props.restaurants.map(result =>{
                            return (
                                <Marker
                                    icon={RestaurantIcon}
                                    position={[result.latitude, result.longitude]}
                                >
                                    <Popup>
                                        <span>{result.name}</span>
                                    </Popup>
                                </Marker>
                            )
                        })
                    }
                    {
                        this.props.bathrooms.map(result =>{
                            return (
                                <Marker
                                    icon={BathroomIcon}
                                    position={[result.latitude, result.longitude]}
                                >
                                    <Popup>
                                        <span>{result.name}</span>
                                    </Popup>
                                </Marker>
                            )
                        })
                    }     
                </Map> 
            </div>
        )
    }
}

export default MapContainer;