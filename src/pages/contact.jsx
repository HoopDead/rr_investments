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
             <MDBRow>
               <MDBInput className = "col-sm-6" label="Imie"  name = "name"/>
               <MDBInput  className = "col-sm-6"label="Email"  name = "email"/>
             </MDBRow>
             <MDBRow>
               <MDBInput label="Nazwa firmy" name = "text" />
               <MDBInput label="Numer telefonu" name = "tel"/>
             </MDBRow>
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