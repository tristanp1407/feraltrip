import React, { Component } from "react";

class Tile extends Component {
  state = {
    renderSecondButton: this.props.renderSecondButton,
    showIcon: this.props.showIcon,
    setImage: null,
    icon: null,
    darken: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="tile"
          style={{
            backgroundImage: `${this.state.darken}, url(${this.state.setImage})`,
          }}
        >
          <div className="tileTitle">
            <div className="tileTitleText">{this.props.title}</div>
            {this.renderIcon()}
          </div>
          <div className="tileInfo">{this.props.tileInfo}</div>
          <div className="tileBoldText">{this.props.cost}</div>
          <button
            className="tileButton"
            onClick={() => window.open(`${this.props.url}`, "_blank")}
          >
            {this.props.buttonText}
          </button>
          <div className="tileBoldText">{this.props.buttonInfo}</div>
          {this.renderSecondButton()}
        </div>
      </React.Fragment>
    );
  }

  getBackground = async () => {
    const setImage = await import(
      `../../assets/images/trips/peak-district/tiles/${this.props.image}`
    );
    this.setState({ setImage: setImage.default });
  };

  getIcon = async () => {
    const icon = await import(`../../assets/icons/${this.props.icon}`);
    this.setState({ icon: icon.default });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.getBackground);
    window.addEventListener("scroll", this.getIcon);
  }

  renderIcon = () => {
    if (this.state.showIcon)
      return (
        <div
          className="tileTitleIcon"
          style={{ backgroundImage: `url(${this.state.icon})` }}
        ></div>
      );
  };

  renderSecondButton = () => {
    if (this.props.renderSecondButton)
      return (
        <div>
          <button
            className="tileButton"
            onClick={() => window.open(`${this.props.url2}`, "_blank")}
          >
            {this.props.secondButtonText}
          </button>
          <div className="tileBoldText">{this.props.secondButtonInfo}</div>
        </div>
      );
  };
}

export default Tile;
