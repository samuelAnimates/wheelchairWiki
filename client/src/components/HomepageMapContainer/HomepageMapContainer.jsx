import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "./HomepageMapContainer.css";
import SiteIcon from "../SiteIcon"

const stamenTonerTiles = 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
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
                                    position={[result.longitude, result.latitude]}
                                >
                                    <Popup>
                                        <a href={"/viewCity/"+result._id}>{result.name}</a>
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