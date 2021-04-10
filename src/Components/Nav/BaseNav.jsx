import React, { Component } from "react";
import "../../styles/nav/basenav.css";
import { Link } from "react-scroll";

class BaseNav extends Component {
  state = {};
  render() {
    return (
      <div className="basenav-container">
        <Link
          className="basenav-item"
          activeClass="active"
          to="do-section"
          spy={true}
          smooth="easeInOutQuad"
          duration={500}
        >
          Do
        </Link>
        <Link
          className="basenav-item"
          activeClass="active"
          to="stay-section"
          spy={true}
          smooth="easeInOutQuad"
          duration={500}
        >
          Stay
        </Link>
        <Link
          className="basenav-item"
          activeClass="active"
          to="eat-section"
          spy={true}
          smooth="easeInOutQuad"
          duration={500}
        >
          Eat
        </Link>
        <Link
          className="basenav-item"
          activeClass="active"
          to="plan-section"
          spy={true}
          smooth="easeInOutQuad"
          duration={500}
        >
          Plan
        </Link>
      </div>
    );
  }
}

export default BaseNav;
