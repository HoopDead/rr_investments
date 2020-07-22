import React, { Component } from "react";

import Landing from "../assets/images/landing.png"

import { MDBContainer, MDBCol, MDBRow, MDBAnimation} from "mdbreact";

class Home extends Component {
  render() {
    return (
      <MDBAnimation type="fadeInLeftBig">
      <MDBContainer fluid id="home">
        <MDBRow center className="d-flex align-items-center">
          <MDBCol lg="7" className="order-lg-2 order-xs-1 m-md-5 py-4 ml-lg-5 py-md-5 m-5">
          <div className="view overlay">
            <img src={Landing} alt="Logo" className="img-fluid"/>
          </div>
          </MDBCol>
          <MDBCol lg="3" className="order-lg-1 order-xs-2 text-center m-2">
              <p className="h1 home-title">ITdepartment</p>
              <hr></hr>
              <p className = "text-justify font-raleway-light">jesteśmy dynamiczne rozwijającym się, młodym zespołem złożonym z pasjonatów zrzeszonym pod wspólnym celem: dostarczania naszym klientom zaawansowanych, responsywnych stron internetowych i szeroko pojętemu doradztwu z zakresu IT. Świadczone przez nas usługi charakteryzują się doskonałą jakością oraz wyjątkowym podejściem do klienta.</p>
              <a href="https://mdbootstrap.com/" className="btn home-button-orange  text-uppercase w-75">Contact Us</a>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
        </MDBAnimation>
    );
  }
}

export default Home;