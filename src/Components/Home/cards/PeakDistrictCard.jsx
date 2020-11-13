import React, { Component } from "react";
// import "../../../styles/trip/trip.css";
import { Link } from "react-router-dom";
import closeCross from "../../../assets/icons/close-cross.png";
import cardBackground from "../../../assets/images/trips/peak-district/hero/pd-hero-3.jpg";
import climbingIcon from "../../../assets/icons/climbing-icon.png";
import cyclingIcon from "../../../assets/icons/cycling-icon.png";
import hikingIcon from "../../../assets/icons/hiking-icon.png";
import "../../../styles/home/card.css";

class PeakDistrictCard extends Component {
  state = { darken: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))" };

  render() {
    return (
      <div
        className="card"
        style={{
          backgroundImage: `${this.state.darken}, url(${cardBackground})`,
        }}
      >
        <div
          onClick={this.props.toggleCard}
          style={{ backgroundImage: `url('${closeCross}')` }}
          className="exitCard"
        ></div>

        <div className="cardTitle">Peak District</div>

        <div className="cardTripDetails">
          <div>
            <div className="tripDetailBold">2</div>
            <div># of days</div>
          </div>
          <div>
            <div className="tripDetailBold">£215/pp</div>
            <div className="tripDetailStandard">est. cost</div>
          </div>
          <div>
            <div className="iconCont">
              <div style={{ backgroundImage: `url(${climbingIcon})` }}></div>
              <div style={{ backgroundImage: `url(${cyclingIcon})` }}></div>
              <div style={{ backgroundImage: `url(${hikingIcon})` }}></div>
            </div>
            <div>activities</div>
          </div>
        </div>

        <div className="tripComment">includes a beginners climbing session</div>

        <button className="detailPageBtn">
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/PeakDistrict"
          >
            See Details
          </Link>
        </button>
      </div>
    );
  }
}

export default PeakDistrictCard;
