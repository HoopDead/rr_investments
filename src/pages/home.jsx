import React, { Component } from "react";

import Landing from "../assets/images/landing.png"

import { MDBContainer, MDBCol, MDBRow} from "mdbreact";

class Home extends Component {
  render() {
    return (
      <MDBContainer fluid id="home">
        <MDBRow center className="d-flex align-items-center">
          <MDBCol lg="7" className="order-lg-2 order-xs-1 m-md-5 py-4 ml-lg-5 py-md-5 m-5">
          <div className="view overlay">
            <img src={Landing} alt="Logo" className="img-fluid"/>
          </div>
          </MDBCol>
          <MDBCol lg="3" className="order-lg-1 order-xs-2 text-center m-2">
              <p className="h1 home-title">R&R Company</p>
              <hr></hr>
              <p className = "text-justify font-raleway-light">You have an idea? You want to develop and create a brand new product? Get in touch with us and we will change the future togheter!</p>
              <a href="https://mdbootstrap.com/" className="btn home-button-orange  text-uppercase w-75">Contact Us</a>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
    );
  }
}

export default Home;