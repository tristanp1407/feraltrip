import React, { Component } from "react";
import mapBackground from "../../assets/images/home/map/Homepage_v3-05@3x.png";
import pin from "../../assets/icons/pin_icon.png";
import "../../styles/home/homemap.css";

class homeMap extends Component {
  state = {};

  render() {
    return (
      <div className="mapContainer">
        <img src={mapBackground} alt="map" />

        <div onClick={this.props.toggleCard} className="locationPin pinPeakD">
          <img src={pin} alt="location pin" />
          <p>Peak District</p>
        </div>

        <div onClick={this.props.comingSoon} className="locationPin pinLondon">
          <p>London</p>
          <div className="circleLondon"></div>
          {/* <img src={pin} alt="location pin" /> */}
        </div>

        <div
          onClick={this.props.comingSoon}
          className="locationPin pinSnowdonia"
        >
          <p>Snowdonia</p>
          <img src={pin} alt="location pin" />
        </div>

        <div
          onClick={this.props.comingSoon}
          className="locationPin pinWitterings"
        >
          <p>Wittering</p>
          <img src={pin} alt="location pin" />
        </div>
      </div>
    );
  }
}

export default homeMap;
