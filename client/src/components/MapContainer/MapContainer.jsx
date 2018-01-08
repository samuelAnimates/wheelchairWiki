import React, { Component } from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import "./MapContainer.css";
import BathroomIcon from "../BathroomIcon"
import RestaurantIcon from "../RestaurantIcon"
import SiteIcon from "../SiteIcon"

const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const defaultZoomLevel = 11;

class MapContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {sites: this.props.sites, restaurants: this.props.restaurants};
        this.handleDownPanClick = this.handleDownPanClick.bind(this);
        this.handleLeftPanClick = this.handleLeftPanClick.bind(this);
        this.handleRightPanClick = this.handleRightPanClick.bind(this);
        this.handleUpPanClick = this.handleUpPanClick.bind(this);
        this.handleZoomInClick = this.handleZoomInClick.bind(this);
        this.handleZoomOutClick = this.handleZoomOutClick.bind(this);
    }
    componentDidMount() {
        const leafletMap = this.leafletMap.leafletElement;
    }
    handleDownPanClick() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.panBy([0, 100]);
        console.log( leafletMap.getCenter());
    }
    handleLeftPanClick() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.panBy([-100, 0]);
        console.log( leafletMap.getCenter());
    }
    handleRightPanClick() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.panBy([100, 0]);
        console.log( leafletMap.getCenter());
    }
    handleUpPanClick() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.panBy([0, -100]);
        console.log( leafletMap.getCenter());
    }
    handleZoomInClick(){
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.zoomIn(1);
    }
    handleZoomOutClick(){
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.zoomOut(1);
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
                    ref={m => { this.leafletMap = m; }}
                    zoom={defaultZoomLevel}
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
                                        <a href={"#"+result._id}>{result.name}</a>
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
                                        <a href={"#"+result._id}>{result.name}</a>
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
                                        <a href={"#"+result._id}>{result.name}</a>
                                    </Popup>
                                </Marker>
                            )
                        })
                    } 
                </Map>
                <div>
                    <div>
                        <button onClick={this.handleZoomInClick}>
                            Zoom In
                        </button>
                        <button onClick={this.handleZoomOutClick}>
                            Zoom Out
                        </button>
                    </div>
                    <div>
                        <div>
                            <button onClick={this.handleUpPanClick}>
                                Pan Up
                            </button>
                        </div>
                        <div>
                            <button onClick={this.handleLeftPanClick}>
                                Pan Left
                            </button>
                            <button onClick={this.handleRightPanClick}>
                                Pan Right
                            </button>
                        </div>
                        <div>
                            <button onClick={this.handleDownPanClick}>
                                Pan Down
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MapContainer;