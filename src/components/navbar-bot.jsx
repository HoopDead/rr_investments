import React from "react";

import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBIcon } from "mdbreact";

function NavBot() {
   
    return (
        <MDBNavbar expand className="d-md-none d-flex fixed-bottom">
        <MDBNavbarNav className="text-uppercase justify-content-center text-center">
            <MDBNavItem className="mr-2">
                <a href="przyklad1" className="d-flex flex-column">
                    <MDBIcon icon="home" size="lg"/>
                    <span>start</span>
                </a>
            </MDBNavItem>
            <MDBNavItem active className="mr-2">
                <a href="przyklad2" className="d-flex flex-column">
                    <MDBIcon icon="users" size="lg"/>
                    <span>About Us</span>
                </a>
            </MDBNavItem>
            <MDBNavItem className="mr-2 d-flex flex-column">
                <a href="przyklad3" className="d-flex flex-column">
                    <MDBIcon icon="suitcase" size="lg"/>
                    <span>Projects</span>
                </a>
            </MDBNavItem>
            <MDBNavItem className="mr-2 d-flex flex-column">
                <a href="przyklad4" className="d-flex flex-column">
                    <MDBIcon icon="envelope" size="lg"/>
                    <span>Contact</span>
                </a>
            </MDBNavItem>
        </MDBNavbarNav>
    </MDBNavbar>
    )
}

export default NavBot;