import React, { Component } from "react";
import closeCross from "../../../assets/icons/close-cross.png";
import "../../../styles/home/home.css";

class ComingSoon extends Component {
  state = {};

  render() {
    return (
      <div className="cardCont">
        <div className="costCard">
          <img
            className="closeCross"
            src={closeCross}
            alt=""
            onClick={this.props.toggle}
          />
          <h2>Coming Soon!</h2>
          <br />
          <br />
          <p>Chekout our trip in the Peak District</p>
        </div>
      </div>
    );
  }
}

export default ComingSoon;
