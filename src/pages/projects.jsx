import React, { Component } from "react";

import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

import MissDress from "../assets/images/missdress.png";
import Strzyga from "../assets/images/Strzyga.png";
import Sashimi from "../assets/images/sushi.png";

class Projects extends Component {
  render() {
    return (
        <MDBContainer fluid id = "projects-section" className="min-vh-100">
          <MDBRow>
            <MDBCol lg = "4" xs = "12" className = "mt-5 py-5 text-center">
              <img className = "img-fluid" alt="First project logo" src = {MissDress}></img>
              <h3 className = "mt-5 font-raleway-bold text-center">Tytuł strony #1</h3>
              <p className = "text-justify my-4 mx-auto text-w-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at sem aliquet, aliquet <span className = "font-raleway-bold">libreo</span> quis, vulputate ligula. Suspendisse non volutpat enim, quis euismod Morbi ornare, lorem interdum congue interdum, magna <span className = "font-raleway-bold">ligula</span> consequat lectus, eget iaculis ligula magna id lacus. Fusce blandit nunc ac aliquet cursus. Integer tempus nisl et est eleifend </p>
            </MDBCol>
            <MDBCol lg = "4" xs = "12" className = "mt-5 py-5 text-center">
              <img className = "img-fluid" alt="Second Project Logo" src = {Strzyga}></img>
              <h3 className = "mt-5 font-raleway-bold text-center">Tytuł strony #2</h3>
              <p className = "text-justify my-4 mx-auto text-w-auto">Lorem ipsum dolor sit amet, consectetur <span className = "font-raleway-bold">adipiscing</span> elit. Etiam at sem aliquet, aliquet libero quis, vulputate ligula. Suspendisse non volutpat enim, quis euismod Morbi ornare, <span className = "font-raleway-bold">lorem</span> interdum congue interdum, magna ligula consequat lectus, eget iaculis ligula magna id lacus. Fusce blandit nunc ac aliquet cursus. Integer tempus nisl et est eleifend </p>
            </MDBCol>
            <MDBCol lg = "4" xs = "12" className = "mt-5 py-5 text-center">
              <img className = "img-fluid" alt="Third Project logo" src = {Sashimi}></img>
              <h3 className = "mt-5 font-raleway-bold text-center">Tytuł strony #3</h3>
              <p className = "text-justify my-4 mx-auto text-w-auto mb-5">Lorem ipsum dolor sit <span className = "font-raleway-bold">amet</span>, consectetur adipiscing elit. Etiam at sem aliquet, aliquet libero quis, vulputate ligula. Suspendisse non volutpat enim, quis euismod Morbi ornare, lorem interdum congue <span className = "font-raleway-bold">interdum</span>, magna ligula consequat lectus, eget iaculis ligula magna id lacus. Fusce blandit nunc ac aliquet cursus. Integer tempus nisl et est eleifend </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    );
  }
}

export default Projects;