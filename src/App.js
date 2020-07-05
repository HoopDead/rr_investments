/* Everything else */
import React, { Component } from "react";
import { Router } from "@reach/router";

/* Here we imnport assets */
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
/* here we import pages or components */

import NavBar from "./components/navbar.jsx"
import Home from "./pages/home.jsx";
import AboutUs from "./pages/about_us.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";


class App extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow center style={{ height: "100vh" }}>
          <MDBCol middle="true" sm="8" className="text-center">
            <NavBar/>
            {/* Routing. Path attribute defines a relative address  */}
            <Router>
              <Home path="/home"/>
              <AboutUs path="/about"/>
              <Contact path="contact"/>
              <Projects path="/projects"/>
            </Router>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
