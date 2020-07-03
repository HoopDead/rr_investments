import React, { Component } from "react";
import { Router } from "@reach/router";
import AboutUs from "./pages/about_us.jsx";
import Contact from "./pages/contact.jsx";
import Projects from "./pages/projects.jsx"


import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow center style={{ height: "100vh" }}>
          <MDBCol middle="true" sm="8" className="text-center">
            <Router>
              <Projects path="/projects"/>
            </Router>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
