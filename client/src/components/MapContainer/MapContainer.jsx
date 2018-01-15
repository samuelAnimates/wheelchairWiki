import React, { Component } from 'react';
import {FeatureGroup, LayersControl, TileLayer, Map, Marker, Popup} from 'react-leaflet';
import "./MapContainer.css";
import BathroomIcon from "../BathroomIcon"
import Legend from "../../components/Legend";
import RestaurantIcon from "../RestaurantIcon"
import SiteIcon from "../SiteIcon"

const baseLayerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const baseLayerAttr = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const defaultZoomLevel = 11;

class MapContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sites: this.props.sites,
            restaurants: this.props.restaurants,
            bathrooms: this.props.bathrooms};
        this.handleDownPanClick = this.handleDownPanClick.bind(this);
        this.handleLeftPanClick = this.handleLeftPanClick.bind(this);
        this.handleRightPanClick = this.handleRightPanClick.bind(this);
        this.handleUpPanClick = this.handleUpPanClick.bind(this);
        this.handleZoomInClick = this.handleZoomInClick.bind(this);
        this.handleZoomOutClick = this.handleZoomOutClick.bind(this);
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
                    <div role="application">
                        <Map
                            center={this.props.mapCenter}
                            ref={m => { this.leafletMap = m; }}
                            zoom={defaultZoomLevel}
                            dragging={false}
                            scrollWheelZoom={false}
                        >
                            <LayersControl position="topright">
                                <LayersControl.BaseLayer name="Street Map" checked="true">
                                    <TileLayer
                                        attribution={baseLayerAttr}
                                        url={baseLayerTiles}
                                    />
                                </LayersControl.BaseLayer>
                                <LayersControl.Overlay name="Sites" checked="true">
                                    <FeatureGroup>
                                        {
                                            this.props.sites.map(result => {
                                                return (
                                                    <Marker
                                                        icon={SiteIcon}
                                                        position={[result.latitude, result.longitude]}
                                                    >
                                                        <Popup offset={[0, -10]}>
                                                            <p>
                                                                <a href={"#" + result._id}>{result.name}</a>
                                                                <br />
                                                                Entrance: &nbsp;
                                                                            {result.entrance === 0 &&
                                                                    <span>Not Accessible</span>
                                                                }
                                                                {result.entrance === 0.5 &&
                                                                    <span>Mixed Accessibility</span>
                                                                }
                                                                {result.entrance === 1 &&
                                                                    <span>Accessible</span>
                                                                }
                                                                <br />
                                                                Bathroom: &nbsp;
                                                                            {result.bathroom === 0 &&
                                                                    <span>Not Accessible</span>
                                                                }
                                                                {result.bathroom === 0.5 &&
                                                                    <span>Mixed Accessibility</span>
                                                                }
                                                                {result.bathroom === 1 &&
                                                                    <span>Accessible</span>
                                                                }
                                                            </p>
                                                        </Popup>
                                                    </Marker>
                                                )
                                            })
                                        }
                                    </FeatureGroup>
                                </LayersControl.Overlay>
                                <LayersControl.Overlay name="Restaurants" checked="true">
                                    <FeatureGroup>
                                        {
                                            this.props.restaurants.map(result => {
                                                return (
                                                    <Marker
                                                        icon={RestaurantIcon}
                                                        position={[result.latitude, result.longitude]}
                                                    >
                                                        <Popup offset={[0, -10]}>
                                                            <p>
                                                                <a href={"#" + result._id}>{result.name}</a>
                                                                <br />
                                                                Entrance: &nbsp;
                                                                            {result.entrance === 0 &&
                                                                    <span>Not Accessible</span>
                                                                }
                                                                {result.entrance === 0.5 &&
                                                                    <span>Mixed Accessibility</span>
                                                                }
                                                                {result.entrance === 1 &&
                                                                    <span>Accessible</span>
                                                                }
                                                                <br />
                                                                Bathroom: &nbsp;
                                                                            {result.bathroom === 0 &&
                                                                    <span>Not Accessible</span>
                                                                }
                                                                {result.bathroom === 0.5 &&
                                                                    <span>Mixed Accessibility</span>
                                                                }
                                                                {result.bathroom === 1 &&
                                                                    <span>Accessible</span>
                                                                }
                                                            </p>
                                                        </Popup>
                                                    </Marker>
                                                )
                                            })
                                        }
                                    </FeatureGroup>
                                </LayersControl.Overlay>
                                <LayersControl.Overlay name="Public Accessible Bathrooms" checked="true">
                                    <FeatureGroup>
                                        {
                                            this.props.bathrooms.map(result => {
                                                return (
                                                    <Marker
                                                        icon={BathroomIcon}
                                                        position={[result.latitude, result.longitude]}
                                                    >
                                                        <Popup offset={[0, -10]}>
                                                            <a href={"#" + result._id}>{result.name}</a>
                                                        </Popup>
                                                    </Marker>
                                                )
                                            })
                                        }
                                    </FeatureGroup>
                                </LayersControl.Overlay>
                            </LayersControl>
                        </Map>
                        <div className="padding-bottom-1em text-center">
                            <div className="display-inline-block padding-top-p5em">
                                <h4 className="text-center">Map Control Buttons</h4>
                                <div className="display-inline-block padding-left-p5em padding-right-p5em">
                                    <div>
                                        <button className="bg-white border-color-240-240-240 border-radius-5px border-style-outset font-exo padding-bottom-p25em padding-top-p25em width-4p5em" onClick={this.handleZoomInClick}>
                                            In (+)
                                            </button>
                                    </div>
                                    <div>
                                        <button className="bg-white border-color-240-240-240 border-radius-5px border-style-outset font-exo padding-bottom-p25em padding-top-p25em width-4p5em" onClick={this.handleZoomOutClick}>
                                            Out (-)
                                            </button>
                                    </div>
                                    <div className="font-exo">
                                        Adjust Zoom
                                        </div>
                                </div>
                                <div className="display-inline-block padding-left-p5em padding-right-p5em">
                                    <div>
                                        <button className="bg-white border-color-240-240-240 border-radius-5px border-style-outset font-exo width-4p5em" onClick={this.handleUpPanClick}>
                                            North
                                        </button>
                                    </div>
                                    <div>
                                        <button className="bg-white border-color-240-240-240 border-radius-5px border-style-outset font-exo width-4p5em" onClick={this.handleLeftPanClick}>
                                            West
                                        </button>
                                        <button className="bg-white border-color-240-240-240 border-radius-5px border-style-outsetx font-exo width-4p5em" onClick={this.handleRightPanClick}>
                                            East
                                        </button>
                                    </div>
                                    <div>
                                        <button className="bg-white border-color-240-240-240 border-radius-5px border-style-outset font-exo width-4p5em" onClick={this.handleDownPanClick}>
                                            South
                                        </button>
                                    </div>
                                    <div className="font-opensans">
                                        Adjust Position
                                    </div>
                                </div>
                            </div>
                            <div className="display-inline-block margin-auto padding-top-p5em">
                                <Legend />
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MapContainer;