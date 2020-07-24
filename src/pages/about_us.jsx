import React, { Component } from "react";

import {  MDBContainer, MDBRow, MDBCol } from "mdbreact";

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBIcon } from
"mdbreact";

class AboutUs extends Component {

  render() {
    return (
        /*
          Whole section for render a about section for devices larger than 992px.
        */
       <MDBContainer fluid id="about" className = "py-md-5">
        <div className = "d-none d-md-block py-5">
          <div className = "mt-5">
            <h3 className = "text-center about-title">WSZYSTKO <span className = "font-raleway-bold">ZACZYNA SIĘ</span> TUTAJ</h3>
            <hr className = "about-hr-orange-border-2"></hr>
            <h5 className = "text-center font-raleway-light">Świadczymy usługi z zakresu:</h5>
          </div>
          <MDBRow className = "my-5">
            <MDBCol sm="12" md = "6" lg="4" className = "text-center my-3">
              <div className = "d-flex flex-row">
                <div className = "mx-auto my-auto">
                  <MDBIcon size = "2x" className = "orange-icon" icon = "laptop-code"></MDBIcon>
                </div>
                <div className = "d-flex flex-column my-auto w-75">
                  <div className = "text-justify"><h3><span className = "font-raleway-bold">Projektowanie</span></h3></div>
                  <hr className = "ml-1 about-hr-orange-border"></hr>
                  <div className = "text-justify font-raleway">zaawansowanych, kompleksowych oraz responsywnych stron internetowych.</div>
                </div>
              </div>
            </MDBCol>
            <MDBCol sm="12" md = "6" lg="4" className = "text-center my-3">
              <div className = "d-flex flex-row">
                <div className = "mx-auto my-auto">
                  <MDBIcon size = "2x" className = "orange-icon" icon = "cloud-upload-alt"></MDBIcon>
                </div>
                <div className = "d-flex flex-column my-auto w-75">
                <div className = "text-justify"><h3><span className = "font-raleway-bold">Implementacja</span></h3></div>
                  <hr className = "ml-1 about-hr-orange-border"></hr>
                  <div className = "text-justify font-raleway">aplikacji internetowych takich jak: blogi, sklepy internetowe, platformy sprzedażowe, fora i inne.</div>
                </div>
              </div>
            </MDBCol>
          <MDBCol sm="12" md = "6" lg="4" className = "text-center my-3">
            <div className = "d-flex flex-row">
              <div className = "mx-auto my-auto">
                <MDBIcon size = "2x" className = "orange-icon" icon = "cogs"></MDBIcon>
              </div>
              <div className = "d-flex flex-column my-auto w-75">
              <div className = "text-justify"><h3><span className = "font-raleway-bold">Optymalizacja</span></h3></div>
                <hr className = "ml-1 about-hr-orange-border"></hr>
                <div className = "text-justify font-raleway">stron internetowych pod kątem wyników w wyszukiwarkach internetowych - SEO.</div>
              </div>
            </div>
          </MDBCol>
          <MDBCol sm="12" md = "6" lg="4" className = "text-center my-3">
            <div className = "d-flex flex-row">
              <div className = "mx-auto my-auto">
                <MDBIcon size = "2x" className = "orange-icon" icon = "pen-nib"></MDBIcon>
              </div>
              <div className = "d-flex flex-column my-auto w-75">
              <div className = "text-justify"><h3><span className = "font-raleway-bold">Tworzenie</span></h3></div>
                <hr className = "ml-1 about-hr-orange-border"></hr>
                <div className = "text-justify font-raleway">tekstów z zakresu content marketingu: tekstów promocyjnych, reklamowych oraz innych, pożądanych przez naszych klientów zawartości.</div>
              </div>
            </div>
          </MDBCol>
          <MDBCol sm="12" md = "6" lg="4" className = "text-center my-3">
            <div className = "d-flex flex-row">
              <div className = "mx-auto my-auto">
                <MDBIcon size = "2x" className = "orange-icon" icon = "tools"></MDBIcon>
              </div>
              <div className = "d-flex flex-column my-auto w-75">
              <div className = "text-justify"><h3><span className = "font-raleway-bold">Wdrażanie</span></h3></div>
                <hr className = "ml-1 about-hr-orange-border"></hr>
                <div className = "text-justify font-raleway">witryn typu Landing Page z zachowaniem standardów W3C.</div>
              </div>
            </div>
          </MDBCol>
          <MDBCol sm="12" md = "6" lg="4" className = "text-center my-3">
            <div className = "d-flex flex-row">
              <div className = "mx-auto my-auto">
                <MDBIcon size = "2x" className = "orange-icon" icon = "money-bill-alt"></MDBIcon>
              </div>
              <div className = "d-flex flex-column my-auto w-75">
              <div className = "text-justify"><h3><span className = "font-raleway-bold">Zespalanie</span></h3></div>
                <hr className = "ml-1 about-hr-orange-border"></hr>
                <div className = "text-justify font-raleway">witryn internetowych z wieloma rodzajami systemów płatności.</div>
              </div>
            </div>
          </MDBCol>
          <MDBCol sm="12" md = "6" lg="4" className = "text-center my-3">
            <div className = "d-flex flex-row">
              <div className = "mx-auto my-auto">
                <MDBIcon size = "2x" className = "orange-icon" icon = "balance-scale"></MDBIcon>
              </div>
              <div className = "d-flex flex-column my-auto w-75">
              <div className = "text-justify"><h3><span className = "font-raleway-bold">Doradztwo</span></h3></div>
                <hr className = "ml-1 about-hr-orange-border"></hr>
                <div className = "text-justify font-raleway">z zakresu wprowadzania firm w przestrzeń wirtualna: tworzenie stron w mediach społecznościowych, internetowych kampanii promocyjnych, strategii marketingowej w przestrzeni wirtualnej.</div>
              </div>
            </div>
          </MDBCol>
          <MDBCol sm="12" md = "6" lg="4" className = "text-center my-3">
            <div className = "d-flex flex-row">
              <div className = "mx-auto my-auto">
                <MDBIcon size = "2x" className = "orange-icon" fab icon = "wordpress"></MDBIcon>
              </div>
              <div className = "d-flex flex-column my-auto w-75">
              <div className = "text-justify"><h3><span className = "font-raleway-bold">Obsługa</span></h3></div>
                <hr className = "ml-1 about-hr-orange-border"></hr>
                <div className = "text-justify font-raleway">systemów zarządzania treścią - CMS oraz jego integracją z wcześniej powstałymi witrynami.</div>
              </div>
            </div>
          </MDBCol>
          <MDBCol sm="12" md = "6" lg="4" className = "text-center my-3">
            <div className = "d-flex flex-row">
              <div className = "mx-auto my-auto">
                <MDBIcon size = "2x" className = "orange-icon" icon = "sync-alt"></MDBIcon>
              </div>
              <div className = "d-flex flex-column my-auto w-75">
              <div className = "text-justify"><h3><span className = "font-raleway-bold">Modernizacja</span></h3></div>
                <hr className = "ml-1 about-hr-orange-border"></hr>
                <div className = "text-justify font-raleway">dotychczas istniejących witryn internetowych, ich dalszą obsługa oraz kompleksowym doradztwem.</div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        </div>
        {/* Section for devices smaller than 992px :) */}
        <div className = "d-xs-flex d-md-none">
          <MDBCol sm = "12">
            <div className = "mt-5">
              <h4 className = "text-justify font-raleway-bold">WSZYSTKO ZACZYNA SIĘ TUTAJ</h4>
              <h5 className = "text-justify font-raleway-light mt-3">Świadczymy usługi z zakresu:</h5>
            </div>
          </MDBCol>
          <MDBCarousel
            activeItem={1}
            length={6}
            showControls={false}
            showIndicators={false}
            className="z-depth-1 mt-5"
            mobileGesture
            slide
            id = "about-carousel">
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView waves className = "text-center">
                <MDBIcon size = "4x" className = "orange-icon" icon = "laptop-code"></MDBIcon>
                <h3 className = "mt-4"><span className = "font-raleway-bold">Projektowanie</span></h3>
                <p className = "font-raleway-light text-justify">zaawansowanych, kompleksowych oraz responsywnych stron internetowych.</p>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView waves className = "text-center">
              <MDBIcon size = "4x" className = "orange-icon" icon = "balance-scale"></MDBIcon>
                <h3 className = "mt-4"><span className = "font-raleway-bold">Doradztwo</span></h3>
                <p className = "font-raleway-light text-justify">z zakresu wprowadzania firm w przestrzeń wirtualna: tworzenie stron w mediach społecznościowych, internetowych kampanii promocyjnych, strategii marketingowej w przestrzeni wirtualnej.</p>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView waves className = "text-center">
                <MDBIcon size = "4x" className = "orange-icon" icon = "cogs"></MDBIcon>
                <h3 className = "mt-4"><span className = "font-raleway-bold">Optymalizacja</span></h3>
                <p className = "font-raleway-light text-justify">stron internetowych pod kątem wyników w wyszukiwarkach internetowych - SEO.</p>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView waves className = "text-center">
                <MDBIcon size = "4x" className = "orange-icon" icon = "pen-nib"></MDBIcon>
                <h3 className = "mt-4"><span className = "font-raleway-bold">Tworzenie</span></h3>
                <p className = "font-raleway-light text-justify">tekstów z zakresu content marketingu: tekstów promocyjnych, reklamowych oraz innych, pożądanych przez naszych klientów zawartości.</p>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="5">
              <MDBView waves className = "text-center">
                <MDBIcon size = "2x" className = "orange-icon" icon = "tools"></MDBIcon>
                <h3 className = "mt-4"><span className = "font-raleway-bold">Wdrażanie</span></h3>
                <p className = "font-raleway-light text-justify">witryn typu Landing Page z zachowaniem standardów W3C.</p>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="6">
              <MDBView waves className = "text-center">
                <MDBIcon size = "4x" className = "orange-icon" icon = "money-bill-alt"></MDBIcon>
                <h3 className = "mt-4"><span className = "font-raleway-bold">Zespalanie</span></h3>
                <p className = "font-raleway-light text-justify">witryn internetowych z wieloma rodzajami systemów płatności.</p>
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
