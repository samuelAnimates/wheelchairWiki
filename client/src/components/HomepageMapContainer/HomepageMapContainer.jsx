import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "./HomepageMapContainer.css";
import SiteIcon from "../SiteIcon"

const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const zoomLevel = 1;
const mapCenter = [0,0]

class HomepageMapContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {cities: this.props.cities};
    }

    render() {
        return (
            <div className="display-block margin-auto">
                <Map
                    center={mapCenter}
                    zoom={zoomLevel}
                >
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles}
                    />
                    {
                        this.props.cities.map(result =>{
                            console.log([result.latitude, result.longitude]);
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

                </Map> 
            </div>
        )
    }
}

export default HomepageMapContainer;