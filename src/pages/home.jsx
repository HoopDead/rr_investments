import React, { Component } from "react";

import Landing from "../assets/landing.svg"

import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";

class Home extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow center style={{ height: "100vh" }}>
          <MDBCol md="5" sm="8" className="text-center h-50">
            <img src={Landing} alt="Landing"/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Home;
