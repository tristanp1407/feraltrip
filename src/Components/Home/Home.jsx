import React, { Component } from "react";
import Nav from "../Nav/Nav";
import HomeMap from "./HomeMap";
import HomeText from "./HomeText";
import PeakDistrictCard from "./cards/PeakDistrictCard";
import "../../styles/home/home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.toggleCard = this.toggleCard.bind(this);
  }

  state = {
    cardStates: {
      peakDCard: false,
    },
  };

  render() {
    return (
      <div className="home">
        <div className="textWrapper">
          <HomeText />
        </div>

        <div className="mapWrapper">
          <HomeMap toggleCard={this.toggleCard} />
        </div>

        {this.renderCard()}

        <Nav />
      </div>
    );
  }

  renderCard = () => {
    if (this.state.cardStates.peakDCard)
      return (
        <div className="cardCont">
          <PeakDistrictCard toggleCard={this.toggleCard} />
        </div>
      );
  };

  toggleCard = () => {
    this.setState((prevState) => {
      let cardStates = { ...prevState.cardStates };
      cardStates.peakDCard = cardStates.peakDCard ? false : true;
      return { cardStates };
    });
    console.log(this.state.cardStates.peakDCard);
  };
}

export default Home;
