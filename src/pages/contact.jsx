import React, { Component } from "react";

import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBInput } from "mdbreact";

class Contact extends Component {
  render() {
    return (
      <MDBContainer>
         <MDBRow center>
            <h1 style = {{fontSize: 30, height: 50}}>Zrobimy dla Ciebie coś wspaniałego, ale najpierw <span style = {{color: "coral"}}>porozmawiajmy.</span></h1>
            <form style = {{marginTop: 50}}>
            <p className="h5 text-center mb-4">Wypełnij poniższy formularz!</p>
            <div className="grey-text">
             <MDBCol>
               <MDBInput label="Imie"  name = "name"/>
               <MDBInput label="Email"  name = "email"/>
             </MDBCol>
             <MDBCol>
               <MDBInput label="Nazwa firmy" name = "text" />
               <MDBInput label="Numer telefonu" name = "tel"/>
             </MDBCol>
           </div>
           <div className="text-center">
           <MDBBtn rounded >Wyślij</MDBBtn>
           </div>
           </form>
          </MDBRow>
       </MDBContainer>
    );
  }
}

export default Contact;