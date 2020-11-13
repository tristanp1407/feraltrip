import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import PeakDistrict from "./Components/Trips/peakdistrict/PeakDistrict";
import About from "./Components/About/About";
import Test from "./Components/Test/Test";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/PeakDistrict" component={PeakDistrict} />
        <Route path="/AboutUs" component={About} />
        <Route path="/test" component={Test} />
      </div>
    </Router>
  );
}

export default App;
