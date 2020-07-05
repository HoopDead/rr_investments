import React, { Component } from "react";

import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";

class AboutUs extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow center style={{ height: "100vh" }}>
          <MDBCol middle="true" sm="8" className="text-center">
            <h1>About</h1>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default AboutUs;
