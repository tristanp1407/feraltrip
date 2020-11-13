import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import "../../styles/nav/nav.css";
import burger from "../../assets/icons/burger.png";
import closeCross from "../../assets/icons/exit-white.png";

class Nav extends Component {
  state = {
    drop: false,
    navIcon: burger,
  };
  render() {
    return (
      <div>
        <div className="navBar">
          <div className="navText">
            <Link to="/" style={{ textDecoration: "none" }}>
              <p>feral</p>
            </Link>
          </div>

          <div
            className="burger"
            onClick={() => {
              this.toggleDrop();
              this.setNavIcon();
            }}
            style={{ backgroundImage: `url('${this.state.navIcon}')` }}
          ></div>
        </div>

        <CSSTransition
          in={this.state.drop}
          timeout={500}
          classNames="transition"
          unmountOnExit
        >
          <div>{this.renderDrop()}</div>
        </CSSTransition>
      </div>
    );
  }

  renderDrop = () => {
    if (this.state.drop)
      return (
        <div className="dropDown">
          <Link className="link" to="/">
            <p>Explore</p>
          </Link>
          <Link className="link" to="/AboutUs">
            <p>About Us</p>
          </Link>
          <p>Contact Us</p>
        </div>
      );
  };

  setNavIcon = () => {
    if (this.state.drop) {
      this.setState({
        navIcon: burger,
      });
    } else this.setState({ navIcon: closeCross });
  };

  toggleDrop = () => {
    this.setState({ drop: !this.state.drop });
    console.log(this.state.drop);
  };
}

export default Nav;
