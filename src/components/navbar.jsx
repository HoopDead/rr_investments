import React from "react";

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem } from "mdbreact";
import Logo from "../assets/images/logo.png";

function NavBar() {
   
    return (
        <MDBNavbar expand="md" className="fixed-top white">
            <MDBNavbarBrand className = "navbar-title ml-lg-5"><img className = "img-fluid my-auto" src = {Logo}></img></MDBNavbarBrand>
            <MDBNavbarNav right className="text-uppercase d-none d-md-flex mr-lg-5">
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
