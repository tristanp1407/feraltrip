import React, { Component } from "react";
import "../../styles/home/hometext.css";

class HomeText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="textStrong">get some fresh air</div>
        <div className="textStandard">
          simple and affordable short trip ideas in the UK, starting from London
        </div>
        <div className="textStandard">
          we find cool things to do and tell you about them for free
        </div>
        <div className="infoText">click a location to find out more</div>
      </div>
    );
  }
}

export default HomeText;
