import React, { Component } from "react";

<<<<<<< HEAD
import Landing from "../assets/landing.png"
=======
import Landing from "../assets/images/landing.png"
>>>>>>> bf50a890403356fb98e227e4013424bca9efa95f

import { MDBBtn, MDBCol, MDBRow } from "mdbreact";

class Home extends Component {
  render() {
    return (
        <MDBRow center style={{ height: "100vh" }}>
          <MDBCol md="7" className="view overlay">
            <img src={Landing} alt="Landing" className="card-img-top"/>
          </MDBCol>
          <MDBCol md="5">
            <div>
              <p className="h2">R&R Company</p>
              <p>You have an idea? You want to develop and create a brand new product? Get in touch with us and we will change the future togheter!</p>
            </div>
          </MDBCol>
        </MDBRow>
    );
  }
}

export default Home;
