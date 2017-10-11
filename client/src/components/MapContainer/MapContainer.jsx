import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "./MapContainer.css";
import BathroomIcon from "../BathroomIcon"
import RestaurantIcon from "../RestaurantIcon"
import SiteIcon from "../SiteIcon"

const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const zoomLevel = 13;


class MapContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {sites: props.sites, restaurants: props.restaurants};
    }

    render() {
        return (
            <div className="display-block margin-auto">
                <Map
                    center={[10.772939, 106.69839]}
                    zoom={zoomLevel}
                >
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles}
                    />
                    {
                        this.props.sites.map(result =>{
                            console.log([result.coordinates.lat, result.coordinates.long]);
                            return (
                                <Marker
                                    icon={SiteIcon}
                                    position={[result.coordinates.lat, result.coordinates.long]}
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
                            console.log([result.coordinates.lat, result.coordinates.long]);
                            return (
                                <Marker
                                    icon={RestaurantIcon}
                                    position={[result.coordinates.lat, result.coordinates.long]}
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
                            console.log([result.coordinates.lat, result.coordinates.long]);
                            return (
                                <Marker
                                    icon={BathroomIcon}
                                    position={[result.coordinates.lat, result.coordinates.long]}
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