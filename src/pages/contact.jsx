import React, { Component } from "react";
import emailjs from "emailjs-com";

import {  MDBCol, MDBContainer, MDBRow, MDBInput, MDBIcon, MDBAlert } from "mdbreact";

import Envelope from "../assets/images/projects_envelope.png";
import Telephone from "../assets/images/projects_telephone.png";
import Mess from "../assets/images/projects_mess.png";

import "../index.css";

class Contact extends Component {

  sendEmail(e) {
    e.preventDefault();

    let companyNameVal = document.getElementById("company_name").value; //This argument is not required :)
    let userEmailVal = document.getElementById("user_email").value;
    let messageVal = document.getElementById("message").value;
    let contactNumberVal = document.getElementById("contact_number").value;
    let array_of_errors = [];
    console.log(companyNameVal, userEmailVal, messageVal, contactNumberVal);

    //Check if all inputs have values
    if(userEmailVal && messageVal && contactNumberVal) {
      //Check if user insert correct email
      if(/^\S+@\S+\.\S+$/.test(userEmailVal)) {
        console.log("Email is correct")
      } else {
        console.log("Email is incorrect");
        array_of_errors.push("Adres email jest niepoprawny ");
      }
      //Check if user insert correct phone number
      if(/^[0-9]+$/.test(contactNumberVal)) {
        console.log("Telephone number is correct");
      } else {
        console.log("Telephone number is incorrect");
        array_of_errors.push("Numer telefonu jest niepoprawny ");
      }
    } else {
      console.log("Complete all inputs!");
      array_of_errors.push("Wypełnij wszystkie pola ");
    }

    if(array_of_errors.length > 0) {
      let validateErrorElement = document.getElementById("validate-error");
      validateErrorElement.classList.remove("d-none");
      let stringBuilder = array_of_errors.join();
      let validateErrorAlert = document.getElementById("array-of-errors");
      console.log(stringBuilder);
      validateErrorAlert.innerHTML = stringBuilder;
    } else {
      let validateErrorElement = document.getElementById("validate-error");
      document.getElementById("contact-form").classList.add("d-none");
      document.getElementById("contact-subtitle").classList.add("d-none");
      document.getElementById("contact-title").innerHTML = "Dziękujemy za kontakt! <span style = 'color: coral'> odezwiemy się </span> do Ciebie w ciągu 24 godzin. ";
      if(!validateErrorElement.classList.contains("d-none")) {
        validateErrorElement.classList.add("d-none");
      }
    }

    emailjs.sendForm('smtp_server', 'template_KT5DsJQt', e.target, 'user_lsf0dUiMsCJz6YZkzJ5z3')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  render() {
    return (
      <MDBContainer fluid id="contact">
         <MDBRow center>
           <MDBCol md="12">
             <p className="h4 text-center mb-4 mt-5 py-2 font-raleway-bold" id = "contact-title">Zrobimy dla Ciebie coś wspaniałego, ale najpierw <span style = {{color: "coral"}}>porozmawiajmy.</span></p>
             <p className="h6 text-center mb-4" id = "contact-subtitle">Wypełnij poniższy formularz!</p>
             <div id = "validate-error" className = "d-none">
              <MDBAlert color="danger" className = "w-50 mx-auto">
                  <span className = "font-raleway-bold">Popraw następujące błędy:</span> <span id = "array-of-errors"></span> 
                </MDBAlert>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow center className="grey-text" id = "contact-form">
            <form onSubmit = {this.sendEmail}>
              <MDBCol sm="12" md="5" className = "d-md-flex d-md-inline justify-md-content-center">
                <MDBInput style = {{width: "210px"}} label="Nazwa firmy" id = "company_name" name = "company_name" className="mr-4"/>
                <MDBInput  style = {{width: "210px"}} label="Email" id = "user_email" name = "user_email"/>  
              </MDBCol>
              <MDBCol sm="12" md="6" className = "d-md-flex d-md-inline justify-md-content-center">
                <MDBInput type = "textarea" style = {{width: "210px"}}  label="Wiadomość" id = "message" name = "message" className="mr-4"/>
                <MDBInput style = {{width: "210px"}} label="Numer telefonu" id = "contact_number" name = "contact_number"/>
              </MDBCol>
              <div className="text-center">
                <button type = "submit" className = "btn contact-button-orange my-4">Zapisz się!</button>
              </div>
             </form>
             </MDBRow>
             <hr className = "contact-hr-orange mx-auto"></hr>
             <p className = "h5 text-center my-4">Wolisz tradycyjne metody?</p>
          <MDBRow>
             <MDBCol xs="6" lg="4" className = "text-center my-2">
               <img src = {Envelope} className = "img-fluid w-20" alt = "Poczta email"></img>
               <p className = "mt-1">biuro<span className = "font-raleway-bold">@itdepartment.pl</span></p>
             </MDBCol>
             <MDBCol xs="6" lg="4" className = " text-center my-2">
               <img src = {Mess} className = "img-fluid w-20" alt = "Messenger"></img>
               <p className = "mt-1">IT<span className = "font-raleway-bold">department</span></p>
             </MDBCol>
             <MDBCol xs="6" lg="4" className = "text-center my-2">
               <img src = {Telephone} className = "img-fluid w-20" alt = "Telefon"></img>
               <p className = "mt-2"><span className = "font-raleway-bold">+48 </span>732 030 944</p>
               <p className = "mt-1"><span className = "font-raleway-bold">+48 </span>506 746 648</p>
             </MDBCol>
            </MDBRow>
            <hr className = "contact-hr-orange mx-auto"></hr>
           <p className = "font-raleway-bold h5 text-center margin-contact-bottom">Czekamy na twoją wiadomość!<MDBIcon className = "orange-icon mx-2" icon = "heart"></MDBIcon></p>
      </MDBContainer>
    );
  }
}

export default Contact;