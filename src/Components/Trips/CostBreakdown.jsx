import React, { Component } from "react";
import "../../styles/trip/costbreakdown.css";
import closeCross from "../../assets/icons/close-cross.png";

class CostBreakdown extends Component {
  state = {};
  render() {
    return (
      <div className="costCard">
        <img
          className="closeCross"
          src={closeCross}
          alt=""
          onClick={this.props.toggleCostBreakdown}
        />
        <p className="singleCost">Train = ~£100 rtn</p>
        <p className="singleCost">Camping = £7.50pn x2</p>
        <p className="singleCost">Climbing = £75</p>
        <p className="singleCost">Cycle hire = £25</p>
        <hr
          style={{
            borderTop: "0.5px solid white",
            width: "90%",
          }}
        />
        <p className="totalCost">
          <strong>£215</strong>
        </p>

        <p className="singleCost">
          (this is the estimated cost, prices may vary on time of year
        </p>
      </div>
    );
  }
}

export default CostBreakdown;
