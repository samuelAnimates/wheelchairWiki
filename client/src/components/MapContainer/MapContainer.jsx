import React from "react";
import "./MapContainer.css";
import GoogleApiComponent from "../GoogleApiComponent"
import Map from "../Map"

class MapContainer extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading from MapContainer.jsx...</div>
    }
    const style = {
      width: "200px",
      height: "500px"
    }
    console.log(this.props.google);
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(MapContainer)
