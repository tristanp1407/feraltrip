import React, { Component } from "react";
import Nav from "../Nav/Nav";
import HomeMap from "./HomeMap";
import HomeText from "./HomeText";
import PeakDistrictCard from "./cards/PeakDistrictCard";
import "../../styles/home/home.css";
import ComingSoon from "../Home/cards/ComingSoon.jsx";

class Home extends Component {
  constructor(props) {
    super(props);

    this.toggleCard = this.toggleCard.bind(this);
    this.comingSoonToggle = this.comingSoonToggle.bind(this);
  }

  state = {
    cardStates: {
      peakDCard: false,
      comingSoonCard: false,
    },
  };

  render() {
    return (
      <div className="home">
        <div className="textWrapper">
          <HomeText />
        </div>

        <div className="mapWrapper">
          <HomeMap
            toggleCard={this.toggleCard}
            comingSoon={this.comingSoonToggle}
          />
        </div>

        {this.renderCard()}
        {this.renderComingSoon()}

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

  renderComingSoon = () => {
    if (this.state.cardStates.comingSoonCard)
      return (
        <div className="cardCont">
          <ComingSoon toggle={this.comingSoonToggle} />
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

  comingSoonToggle = () => {
    this.setState((prevState) => {
      let cardStates = { ...prevState.cardStates };
      cardStates.comingSoonCard = cardStates.comingSoonCard ? false : true;
      return { cardStates };
    });
    console.log(this.state.cardStates.comingSoonCard);
  };
}

export default Home;
