import React, { Component } from "react";
import Nav from "../../Nav/Nav";
import CostBreakdown from "../CostBreakdown";
import PeakDistrictMapbox from "../peakdistrict/PeakDistrictMapbox";
import BaseNav from "../../Nav/BaseNav";
import Tile from "../tile";
import "../../../styles/trip/trip.css";
import heroImage from "../../../assets/images/trips/peak-district/hero/pd-hero-3.jpg";
import climbingIcon from "../../../assets/icons/climbing-icon.png";
import cyclingIcon from "../../../assets/icons/cycling-icon.png";
import hikingIcon from "../../../assets/icons/hiking-icon.png";
import timing from "../../../assets/images/trips/peak-district/graphic/timing.png";
import doing from "../../../assets/images/trips/peak-district/graphic/doing.png";

class PeakDistrict extends Component {
  state = {
    darken: "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))",
    showCostBreakdown: false,
  };

  render() {
    return (
      <div>
        <Nav />

        <div
          className="hero"
          style={{
            backgroundImage: `${this.state.darken}, url(${heroImage})`,
          }}
        >
          <h1 className="heroTitle">Peak District</h1>
          <div className="tripDetails">
            <div>
              <div className="tripDetailBold">
                <div>2</div>
              </div>
              <div># of days</div>
            </div>

            <div>
              <div className="tripDetailBold">
                <div>£215</div>
              </div>
              <div>
                est. cost/pp
                <img
                  onClick={this.toggleCostBreakdown}
                  className="costBreakdownIcon"
                  src="https://coach-unlimited.co.uk/wp-content/uploads/2017/10/Info-icon-WHITE-NO-BACKGROUND.png"
                  alt=""
                />
              </div>
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
          {this.renderCostBreakdown()}
          <div className="tripDescription">
            in under 3 hours from London you can be hiking through beautiful
            scenery, learning to climb, and flying down trails on a bike
          </div>
        </div>
        <PeakDistrictMapbox className="mapboxCont" />
        {/* to do --- to do --- to do --- to do --- to do --- to do --- to do --- to do ---  */}
        <section name="do-section">
          <div className="textSection">
            <p>what to do</p>
          </div>
          <div className="tilesCont">
            <Tile
              renderSecondButton={true}
              image="hiking.jpg"
              title="hike"
              showIcon={true}
              icon="hiking-icon.png"
              tileInfo="through beautiful scenery"
              cost="free"
              buttonText="5km"
              url="https://www.alltrails.com/trail/england/derbyshire/north-lees-dennis-knoll-and-stanage-edge"
              buttonInfo="relaxing and scenic"
              secondButtonText="9km"
              url2="https://www.alltrails.com/explore/trail/england/derbyshire/bamford-edge-and-stanage-edge-circular"
              secondButtonInfo="moderate hike, amazing views"
            />
            <Tile
              renderSecondButton={false}
              image="climbing-1-iran.jpg"
              title="climb"
              showIcon={true}
              icon="climbing-icon.png"
              tileInfo="even if it's your first time"
              cost="£70 one-day climbing course"
              buttonText="Courses"
              url="http://gritstoneadventures.co.uk/shop/climbing/beginners-climbing-course-1-day-peak-district-uk/"
              buttonInfo="trusted instructor, great value"
            />
            <Tile
              renderSecondButton={false}
              image="biking.jpg"
              title="bike"
              showIcon={true}
              icon="cycling-icon.png"
              tileInfo="hire from Bike Garage, S33 0AL"
              cost="start at £25/half-day, £30/full-day"
              buttonText="Bike hire"
              url="https://bikegarage.co.uk/"
              buttonInfo="close to campsite, affordable"
            />
          </div>
        </section>

        {/* to stay  --- to stay  --- to stay  --- to stay  --- to stay  --- to stay  --- to stay  ---  */}
        <section name="stay-section">
          <div className="textSection">
            <p>where to stay</p>
          </div>
          <div className="tilesCont">
            <Tile
              renderSecondButton={false}
              image="camping.jpg"
              showIcon={false}
              icon="climbing-icon.png"
              title="campsite"
              tileInfo="at North Lees, HU7 5GF"
              cost="£7.50pp/night"
              buttonText="Campsite"
              url="https://www.peakdistrict.gov.uk/visiting/things-to-do/camping/camping-northlees"
              buttonInfo="30 min walk from Hathersage station, great facilities and value"
            />
            <Tile
              renderSecondButton={false}
              image="lodge.jpg"
              icon="climbing-icon.png"
              title="lodge"
              tileInfo="at North Lees, HU7 5GF"
              cost="£37pp/night"
              buttonText="Lodges"
              url="https://www.peakdistrict.gov.uk/visiting/things-to-do/camping/camping-northlees/camping-pods"
              buttonInfo="warm in the cooler months"
            />{" "}
            <Tile
              renderSecondButton={false}
              image="wild-camping.jpg"
              icon="climbing-icon.png"
              title="wild camping"
              tileInfo="subscribe for exculsive locations"
              cost="free"
              buttonText="Coming soon"
              url=""
              buttonInfo="the true way to experience the outdoors"
            />
          </div>
        </section>

        {/* munch -- munch -- munch -- munch -- munch -- munch -- munch --  */}
        <section name="eat-section">
          <div className="textSection">
            <p>munch and drinks</p>
          </div>
          <div className="tilesCont">
            <Tile
              renderSecondButton={false}
              image="stove.png"
              icon="climbing-icon.png"
              title="stove it"
              tileInfo="cook your own food on a stove"
              cost="this is the stove we used"
              buttonText="Amazon"
              url="https://www.amazon.co.uk/Campingaz-8804184-Bleuet-Micro-Plus/dp/B001P80GR8/ref=sr_1_7?crid=3K5T6LIHWCIXE&dchild=1&keywords=gas+stove+attachment&qid=1596784161&sprefix=gas+stove+attac%2Caps%2C578&sr=8-7"
              buttonInfo="lightweight, small, affordable"
            />
            <Tile
              renderSecondButton={false}
              image="curry.jpg"
              icon="climbing-icon.png"
              title="classic indian"
              tileInfo="aromatic curries served in clay pots"
              cost="6 The Square, Main Rd, Hathersage, Hope Valley S32 1BB"
              buttonText="Maazi"
              url="https://maazi.co.uk/"
              buttonInfo="independant, affordable options"
            />
            <Tile
              renderSecondButton={false}
              image="pub.jpg"
              icon="climbing-icon.png"
              title="cosy pub"
              tileInfo="wine at Jonny's Vino"
              cost="Taggs Knoll, Bamford, S33 0DY"
              buttonText="Anglers Rest"
              url="https://www.anglers.rest/"
              buttonInfo="draft beer, rotating local artwork"
            />
          </div>
        </section>

        <section name="plan-section">
          <div className="textSection">
            <p>trip plan</p>
          </div>
          <div className="tripGraphic">
            <div className="timing">
              <img src={timing} alt="" />
            </div>
            <div className="doing">
              <img src={doing} alt="" />
            </div>
          </div>
        </section>

        <BaseNav />
      </div>
    );
  }
  renderCostBreakdown = () => {
    if (this.state.showCostBreakdown)
      return (
        <div className="costBreakdownCont">
          <CostBreakdown toggleCostBreakdown={this.toggleCostBreakdown} />
        </div>
      );
  };

  toggleCostBreakdown = () => {
    this.setState({
      showCostBreakdown: this.state.showCostBreakdown ? false : true,
    });
  };
}
export default PeakDistrict;
