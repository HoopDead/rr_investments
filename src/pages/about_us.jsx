import React, { Component } from "react";

import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
"mdbreact";

import Diagram from "../assets/images/projects_diagram.png";
import Laptop from "../assets/images/projects_laptop.png";
import Person from "../assets/images/projects_person.png";
import Phone from "../assets/images/projects_phone.png";
import Briefcase from "../assets/images/projects_briefcase.png";
import Gear from "../assets/images/projects_gear.png";

class AboutUs extends Component {
  render() {
    return (
        /*
          Whole section for render a about section for devices larger than 992px.
        */
       <MDBContainer fluid = "True">
        <div className = "d-none d-lg-block py-5">
          <div className = "mt-5">
            <h3 className = "text-center about-title">EVERYTHING <span className = "font-raleway-bold">STARTS</span> IN ONE PLACE</h3>
            <hr className = "about-hr-orange-border-2"></hr>
            <h5 className = "text-center font-raleway-light">Our story starts here. You have an idea, we have tools to bring your concept alive.</h5>
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
        <div className = "d-xs-flex d-lg-none">
          <MDBCol sm = "12">
            <div className = "mt-5">
              <h4 className = "text-justify font-raleway-bold">EVERYTHING STARTS IN ONE PLACE</h4>
              <h5 className = "text-justify font-raleway-light mt-3">Our story starts here. You have an idea, we have tools to bring your concept alive.</h5>
            </div>
          </MDBCol>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            slide
            id = "about-carousel">
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <p>Card 1</p>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <p>Card 2</p>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <p>Card 3</p>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        </div>
      </MDBContainer>
    );
  }
}

export default AboutUs;
