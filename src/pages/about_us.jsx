import React, { Component } from "react";

import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";

import Diagram from "../assets/images/projects_diagram.png";
import Laptop from "../assets/images/projects_laptop.png";
import Person from "../assets/images/projects_person.png";
import Phone from "../assets/images/projects_phone.png";
import Briefcase from "../assets/images/projects_briefcase.png";
import Gear from "../assets/images/projects_gear.png";

class AboutUs extends Component {
  render() {
    return (
        <div className = "d-none d-lg-block py-5">
          <div className = "mt-5">
            <h3 className = "text-center about-title">EVERYTHING STARTS IN ONE PLACE</h3>
            <hr className = "about-hr-orange-border-2"></hr>
            <p className = "text-center font-raleway-light about-font-small-responsive">Our story starts here. You have an idea, we have tools to bring your concept alive.</p>
          </div>
          <MDBRow className = "my-5" center = "True" middle = "True">
            <MDBCol sm="12" lg="4" className = "text-center">
              <div className = "d-flex flex-row">
                <div className = "mx-auto my-auto">
                  <img src = {Briefcase} className = "img-fluid w-50"></img>
                </div>
                <div className = "d-flex flex-column my-auto">
                  <div className = "text-justify"><h3>Lorem <span className = "font-raleway-bold">ipsum</span></h3></div>
                  <hr className = "ml-1 about-hr-orange-border"></hr>
                  <div className = "text-justify font-raleway-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel malesuada purus.</div>
                </div>
              </div>
            </MDBCol>
            <MDBCol sm="12" lg="4" className = "text-center">
              <div className = "d-flex flex-row">
                <div className = "mx-auto my-auto">
                  <img src = {Laptop} className = "img-fluid w-50"></img>
                </div>
                <div className = "d-flex flex-column my-auto">
                <div className = "text-justify"><h3>Lorem <span className = "font-raleway-bold">ipsum</span></h3></div>
                  <hr className = "ml-1 about-hr-orange-border"></hr>
                  <div className = "text-justify font-raleway-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel malesuada purus.</div>
                </div>
              </div>
            </MDBCol>
          <MDBCol sm="12" lg="4" className = "text-center">
            <div className = "d-flex flex-row">
              <div className = "mx-auto my-auto">
                <img src = {Person} className = "img-fluid w-50"></img>
              </div>
              <div className = "d-flex flex-column my-auto">
              <div className = "text-justify"><h3>Lorem <span className = "font-raleway-bold">ipsum</span></h3></div>
                <hr className = "ml-1 about-hr-orange-border"></hr>
                <div className = "text-justify font-raleway-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel malesuada purus.</div>
              </div>
            </div>
          </MDBCol>
          </MDBRow>
          <MDBRow className = "my-5 mx-auto text-center">
          <MDBCol sm="12" lg="4" className = "text-center">
            <div className = "d-flex flex-row">
              <div className = "mx-auto my-auto font-raleway-light">
                <img src = {Phone} className = "img-fluid w-50"></img>
              </div>
              <div className = "d-flex flex-column my-auto">
              <div className = "text-justify"><h3>Lorem <span className = "font-raleway-bold">ipsum</span></h3></div>
                <hr className = "ml-1 about-hr-orange-border"></hr>
                <div className = "text-justify font-raleway-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel malesuada purus.</div>
              </div>
            </div>
          </MDBCol>
          <MDBCol sm="12" lg="4" className = "text-center">
            <div className = "d-flex flex-row">
              <div className = "mx-auto my-auto">
                <img src = {Gear} className = "img-fluid w-50"></img>
              </div>
              <div className = "d-flex flex-column my-auto">
              <div className = "text-justify"><h3>Lorem <span className = "font-raleway-bold">ipsum</span></h3></div>
                <hr className = "ml-1 about-hr-orange-border"></hr>
                <div className = "text-justify font-raleway-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel malesuada purus.</div>
              </div>
            </div>
          </MDBCol>
          <MDBCol sm="12" lg="4" className = "text-center">
            <div className = "d-flex flex-row">
              <div className = "mx-auto my-auto">
                <img src = {Diagram} className = "img-fluid w-50"></img>
              </div>
              <div className = "d-flex flex-column my-auto">
              <div className = "text-justify"><h3>Lorem <span className = "font-raleway-bold">ipsum</span></h3></div>
                <hr className = "ml-1 about-hr-orange-border"></hr>
                <div className = "text-justify font-raleway-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel malesuada purus.</div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default AboutUs;
