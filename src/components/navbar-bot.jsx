import React from "react";

import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBIcon, MDBNavbarToggler, MDBCollapse } from "mdbreact";

function NavBot() {
   
    return (
        <MDBNavbar expand className="d-md-none d-flex fixed-bottom">
        <MDBNavbarNav className="text-uppercase justify-content-center text-center">
            <MDBNavItem className="mr-2 d-flex flex-column text-center">
                <MDBIcon icon="home" size="lg"/>
                <a href="przyklad">start</a>
            </MDBNavItem>
            <MDBNavItem active className="mr-2 d-flex flex-column">
                <MDBIcon icon="users" size="lg"/>
                <a href="przyklad2">About Us</a>
            </MDBNavItem>
            <MDBNavItem className="mr-2 d-flex flex-column">
                <MDBIcon icon="suitcase" size="lg"/>
                <a href="przyklad3">Projects</a>
            </MDBNavItem>
            <MDBNavItem className="mr-2 d-flex flex-column">
                <MDBIcon icon="suitcase" size="lg"/>
                <a href="przyklad4">Contact</a>
            </MDBNavItem>
        </MDBNavbarNav>
    </MDBNavbar>
    )
}

export default NavBot;