import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';
import "./MapContainer.css";
import Control from 'react-leaflet-control';

const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const zoomLevel = 13;

const mapIcon = new L.Icon();
mapIcon.options.iconUrl= "../assets/icons/map-icon.png",
mapIcon.options.iconAnchor= new L.Point(22, 49),
mapIcon.options.size= new L.Point(50, 50),
//shadowUrl: 'my-icon-shadow.png',
// shadowSize: [68, 95],
mapIcon.shadowAnchor= [22, 94]


export default class MapContainer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
          center: [this.props.mapCenter.long, this.props.mapCenter.lat]
        } 
      }

    componentDidMount() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.on('zoomend', () => {
            window.console.log('Current zoom level -> ', leafletMap.getZoom());
        });
    }

    render() {
        return (
            <div className="display-block margin-auto">
                <Map
                    ref={m => { this.leafletMap = m; }}
                    center={this.state.center}
                    zoom={zoomLevel}
                >
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles}
                    />
                    <Marker
                        position = {[this.props.mapCenter.long, this.props.mapCenter.lat]}
                        icon = {mapIcon}
                    />
                    <Control position="topleft" >
                        <button 
                        onClick={ () => this.setState({bounds: [51.3, 0.7]}) }
                        >
                        Reset View
                        </button>
                    </Control>
                </Map>
                
            </div>
        );
    }
}