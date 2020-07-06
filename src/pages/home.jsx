import React, { Component } from "react";

import Landing from "../assets/images/landing.png"

import { MDBBtn, MDBCol, MDBRow } from "mdbreact";

class Home extends Component {
  render() {
    return (
        <MDBRow center className="d-flex align-items-center">
          <MDBCol md="6" className="order-md-2 m-2">
          <div className="view overlay">
            <img src={Landing} alt="Logo" className="img-fluid"/>
          </div>
          </MDBCol>
          <MDBCol md="3" className="order-md-1  text-center m-2">
              <p className="h1">R&R Company</p>
              <hr/>
              <p>You have an idea? You want to develop and create a brand new product? Get in touch with us and we will change the future togheter!</p>
              <a href="https://mdbootstrap.com/" class="btn btn-deep-orange">CONTACT US</a>
          </MDBCol>
        </MDBRow>
    );
  }
}

export default Home;