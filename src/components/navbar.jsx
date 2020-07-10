import React from "react";

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem } from "mdbreact";

function NavBar() {
   
    return (
        <MDBNavbar expand="md" className="fixed-top white">
            <MDBNavbarBrand className = "navbar-title">Rybiański & Roman <span className="font-weight-bold">Investments</span></MDBNavbarBrand>
            <MDBNavbarNav right className="text-uppercase d-none d-md-flex">
                <MDBNavItem className="mr-2">
                    <a href="#home">start</a>
                </MDBNavItem>
                <MDBNavItem className="mr-2">
                    <a href="#about">About Us</a>
                </MDBNavItem>
                <MDBNavItem className="mr-2">
                    <a href="#projects-section">Projects</a>
                </MDBNavItem>
                <MDBNavItem className="mr-2">
                    <a href="#contact">Contact</a>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
    )
}

export default NavBar;
