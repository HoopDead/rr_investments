/* Everything else */
import React, { Component } from "react";
import { Router } from "@reach/router";

/* Here we imnport assets */
import { MDBContainer } from "mdbreact";
import "./index.css";
/* here we import pages or components */

import Navbar from "./components/navbar.jsx"
import Home from "./pages/home.jsx";
import AboutUs from "./pages/about_us.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";


class App extends Component {
  render() {
    return (
      <MDBContainer fluid = "True" className = "min-vh-100 min-vw-100">
        <Navbar></Navbar>
          {/* Routing. Path attribute defines a relative address  */}
          <Router>
            <Home path="/home"/>
            <AboutUs path="/about"/>
            <Contact path="contact"/>
            <Projects path="/projects"/>
          </Router>
      </MDBContainer>
    );
  }
}

export default App;
