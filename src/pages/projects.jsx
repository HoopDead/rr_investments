import React, { Component } from "react";

import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

import MissDress from "../assets/images/missdress.png";
import Strzyga from "../assets/images/strzyga.png";
import Sashimi from "../assets/images/sushi.png";

class Projects extends Component {
  render() {
    return (
        <MDBContainer fluid id = "projects-section" className="min-vh-100">
          <MDBRow>
            <MDBCol lg = "4" xs = "12" className = "mt-5 py-5 text-center">
                <img className = "img-fluid" alt="First project logo" src = {MissDress}></img>
                <h3 className = "mt-5 font-raleway-bold text-center">Miss Dress</h3>
                <p className = "text-justify my-4 mx-auto text-w-auto">Przykładowa strona stworzona do prezentacji <span className = "font-raleway-bold">salonu sukni ślubnych</span>, garniturow, oraz rzeczy z tym związanych.</p>
            </MDBCol>
            <MDBCol lg = "4" xs = "12" className = "mt-5 py-5 text-center">
              <img className = "img-fluid" alt="Second Project Logo" src = {Strzyga}></img>
              <h3 className = "mt-5 font-raleway-bold text-center">Stryga</h3>
              <p className = "text-justify my-4 mx-auto text-w-auto"><span className = "font-raleway-bold">Przykładowy</span> layout strony typu landing page - stworzony w ciągu procesu prezentacji dla <span className = "font-raleway-bold">salonu fryzjerskiego</span> Strzyga. </p>
            </MDBCol>
            <MDBCol lg = "4" xs = "12" className = "mt-5 py-5 text-center">
              <img className = "img-fluid" alt="Third Project logo" src = {Sashimi}></img>
              <h3 className = "mt-5 font-raleway-bold text-center">Sashimi Sushi</h3>
              <p className = "text-justify my-4 mx-auto text-w-auto mb-5">Prototyp designerski strony typu landing page dla franczyzowego dystrybutora <span className = "font-raleway-bold">restauracji Japońskich</span> w Polsce.</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    );
  }
}

export default Projects;