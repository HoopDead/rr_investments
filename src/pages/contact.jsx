import React, { Component } from "react";

import {  MDBCol, MDBContainer, MDBRow, MDBInput, MDBIcon } from "mdbreact";

import Envelope from "../assets/images/projects_envelope.png";
import Telephone from "../assets/images/projects_telephone.png";
import Mess from "../assets/images/projects_mess.png";

import "../index.css";

class Contact extends Component {
  render() {
    return (
      <MDBContainer fluid>
         <MDBRow center>
             <p className="h4 text-center mb-4 mt-5 py-2 font-raleway-bold">Zrobimy dla Ciebie coś wspaniałego, ale najpierw <span style = {{color: "coral"}}>porozmawiajmy.</span></p>
          </MDBRow>
          <MDBRow center>
            <form>
                <p className="h6 text-center mb-4">Wypełnij poniższy formularz!</p>
                <div className="grey-text">
                   <MDBRow center>
                      <MDBInput  style = {{width: "250px"}}  label="Imie"  name = "name"/>
                      <span className = "d-none d-lg-flex" style={{width:"30px"}}></span> 
                      <MDBInput style = {{width: "250px"}} label="Email"  name = "email"/>  
                   </MDBRow>
                   <MDBRow center> 
                      <MDBInput style = {{width: "250px"}}  label="Nazwa firmy" name = "text" />
                      <span className = "d-none d-lg-flex" style={{width:"30px"}}></span>
                      <MDBInput style = {{width: "250px"}} label="Numer telefonu" name = "tel"/>
                   </MDBRow>
                </div>
                <div className="text-center">
                  <button className = "btn contact-button-orange w-50 my-4">Zapisz się!</button>
                </div>
             </form>
             </MDBRow>
             <hr className = "contact-hr-orange m-0 w-100"></hr>
             <p className = "h5 text-center my-4">Wolisz tradycyjne metody?</p>
          <MDBRow>
             <MDBCol xs="6" lg="4" className = "text-center my-2">
               <img src = {Envelope} className = "img-fluid w-20"></img>
               <p className = "mt-1"><span class = "font-raleway-bold">lorem</span>@ipsum.com</p>
             </MDBCol>
             <MDBCol xs="6" lg="4" className = " text-center my-2">
               <img src = {Mess} className = "img-fluid w-20"></img>
               <p className = "mt-1">RR <span class = "font-raleway-bold">Investments</span></p>
             </MDBCol>
             <MDBCol xs="6" lg="4" className = "text-center my-2">
               <img src = {Telephone} className = "img-fluid w-20"></img>
               <p className = "mt-1"><span className = "font-raleway-bold">+48</span> 124 567 289</p>
             </MDBCol>
            </MDBRow>
            <hr className = "contact-hr-orange m-0 w-100"></hr>
           <p className = "font-raleway-bold h5 text-center my-4">Czekamy na twoją wiadomość!<MDBIcon className = "contact-icon mx-2" icon = "heart"></MDBIcon></p>
      </MDBContainer>
    );
  }
}

export default Contact;