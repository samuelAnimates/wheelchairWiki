import React from "react";
import ReactDOM from 'react-dom'

class Map extends React.Component {

  constructor(props) {
    super(props);
    const {lat, lng} = {lat: 41.881832, lng: -87.623177}
    var zoom = 10
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      console.log("YOU MADE IT THIS FAR");
      // google is available
      let {google} = this.props;
      let maps = google.maps;

      let mapRef = this.refs.map;
      console.log(this.refs.map)
      let node = ReactDOM.findDOMNode(mapRef);
      let zoom = this.state.zoom;
      let {lat, lng} = this.state.currentLocation;
      let center = new maps.LatLng(lat, lng);
      let mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);

    }
    // ...
  }

  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
}

export default Map;