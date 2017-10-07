import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import "./MapContainer.css";
import Control from 'react-leaflet-control';

const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const zoomLevel = 12;

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