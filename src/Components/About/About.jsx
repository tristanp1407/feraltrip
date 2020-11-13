import React, { Component } from "react";
import "../../styles/About/about.css";
import "../../styles/nav/nav.css";
import Nav from "../Nav/Nav";
import theBoys from "../../assets/images/about-us/theboys.jpg";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="aboutPage">
          <div className="title">OUR STORY</div>
          <img src={theBoys} alt="" />
          <p>
            The aim of Feral trip is simple - to share practical and concise
            outdoor trip ideas starting from London.
            <br />
            <br />
            We’re three mates working in London and we love all it has to offer,
            but too quickly time passes without us being outside and
            experiencing something new.
            <br />
            <br />
            Cities are great, but we need some fresh air. More and more of us
            are living in cities with stressful and busy lives. It can be hard
            to get out the weekly routine and explore the outside world.
            <br />
            <br />
            We wanted to change that. You don’t need to get on a plane to have a
            great experience, you just need to look in the right places.
            <br />
            <br />
            The UK has so much to offer, yet most of us have barely touched the
            surface of it. Going on trips in the UK is accessible, affordable
            and better for the planet too.
            <br />
            <br />
            It takes time planning these trips, and as we’re doing all the
            research, we thought we’d share them freely with you. If you go on
            one, please let us know!
          </p>
          <div className="aboutIconContainer">
            <img
              onClick={() =>
                window.open(
                  "https://instagram.com/feraltrip?r=nametag",
                  "_blank"
                )
              }
              src="https://lh3.googleusercontent.com/proxy/OTkGcKkprkMyzahqyZQMXrSAM6bAn3Ln-Z5QCUliNjP81Wi-lDdf_gpAvPtwXTdQzceRY-CIitTuNzuWf8bIVjE8otuSTqKNtGjIeQ-OleQ"
              alt="instagram logo"
            />
            <img
              onClick={() =>
                window.open(
                  "https://www.facebook.com/feral-trip-100508931780548/",
                  "_blank"
                )
              }
              src="https://i.pinimg.com/originals/d2/e5/35/d2e5359f8402cb8d3d7b22c463f9013b.png"
              alt="instagram logo"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
