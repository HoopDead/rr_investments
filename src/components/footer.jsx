import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="orange darken-3" className="font-small pt-4 mt-4 w=">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">ITDepartment</h5>
            <p>
              R.R. Investments s.c.<br></br>
              REGON:    385952251<br></br>
              NIP:    8992879317
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title text-left">Kontakt</h5>
            <p className = "my-2 mt-2"><MDBIcon className = "mr-2" fab icon = "facebook-messenger"></MDBIcon> ITDepartment</p>
            <p className = "my-2"><MDBIcon className = "mr-2" icon = "envelope"></MDBIcon>biuro@itdepartment.pl</p>
            <p className = "my-2 mb-5"><MDBIcon className = "mr-2" icon = "phone-alt"></MDBIcon> +48 732 030 944, +48 506 746 648</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> ITDepartment.pl </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;