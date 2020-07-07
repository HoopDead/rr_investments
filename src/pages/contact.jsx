import React, { Component } from "react";

import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBInput } from "mdbreact";

import Envelope from "../assets/images/projects_envelope.png";
import Telephone from "../assets/images/projects_telephone.png";
import Mess from "../assets/images/projects_mess.png";


class Contact extends Component {
  render() {
    return (
      <MDBContainer fluid >
         <MDBRow center>
         <p className="h4 text-center mb-4">Zrobimy dla Ciebie coś wspaniałego, ale najpierw <span style = {{color: "coral"}}>porozmawiajmy.</span></p>
          </MDBRow>
          <MDBRow center>
            <form style = {{marginTop: 75}}>
                <p className="h5 text-center mb-4">Wypełnij poniższy formularz!</p>
                <div className="grey-text">
                 <MDBRow>
                    <MDBInput className = "col-sm-12" label="Imie"  name = "name"/>
                    <MDBInput  className = "col-sm-12" label="Email"  name = "email"/>
                 </MDBRow>
                 <MDBRow>
                    <MDBInput className = "col-sm-12" label="Nazwa firmy" name = "text" />
                    <MDBInput className = "col-sm-12" label="Numer telefonu" name = "tel"/>
                 </MDBRow>
                </div>
                <div className="text-center">
                  <MDBBtn>Zapisz się!</MDBBtn>
                </div>
             </form>
             </MDBRow>
             <div style = {{backgroundColor: "coral", width: "100vw", height: "5px", marginTop: "20px", marginBottom: "20px"}}></div>
             <p className = "h4 text-center mb-4">Wolisz tradycyjne metody?</p>
          <MDBRow>
            <MDBCol className = "col-sm-4 text-center">
               <img src = {Envelope} className = "img-fluid w-20"></img>
               <p>lorem@ipsum.com</p>
            </MDBCol>
            <MDBCol className = "col-sm-4 text-center">
               <img src = {Mess} className = "img-fluid w-20"></img>
               <p>RRInvestments</p>
            </MDBCol>
            <MDBCol className = "col-sm-4 text-center">
               <img src = {Telephone} className = "img-fluid w-20"></img>
               <p>+48 12456789</p>
            </MDBCol>
            </MDBRow>
          <div style = {{backgroundColor: "coral", width: "100vw", height: "5px", marginTop: "20px", marginBottom: "20px"}}></div>
          <p className = "h5 text-center mb-4">Czekamy na twoją wiadomość!</p>
      </MDBContainer>
    );
  }
}

export default Contact;