import React, { Component } from "react";

import Landing from "../assets/images/landing.png"

import { MDBBtn, MDBCol, MDBRow } from "mdbreact";

class Home extends Component {
  render() {
    return (
        <MDBRow center>
          <MDBCol lg="6">
              <img src={Landing} alt="Landing" className="img-fluid"/>
          </MDBCol>
          <MDBCol lg="4" className="text-center align-bottom pt-5">
              <p className="h2">R&R Company</p>
              <hr/>
              <p>You have an idea? You want to develop and create a brand new product? Get in touch with us and we will change the future togheter!</p>
              <a href="https://mdbootstrap.com/" class="btn btn-deep-orange">CONTACT US</a>
          </MDBCol>
        </MDBRow>
    );
  }
}

export default Home;