import React, { Component } from "react";

import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";

class Projects extends Component {
  render() {
    return (
        <MDBRow center style={{ height: "100vh" }}>
          <MDBCol middle="true" sm="8" className="text-center">
            <h1>Projects</h1>
          </MDBCol>
        </MDBRow>
    );
  }
}

export default Projects;