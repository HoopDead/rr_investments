import React from "react";

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem } from "mdbreact";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

/**
 * Navbar
 * Description: Render the upper navbar
 */

function NavBar() {
   
    return (
        <MDBNavbar expand="md" className="fixed-top white">
            <MDBNavbarBrand className = "navbar-title ml-lg-5"><Link to = "/"><img className = "img-fluid my-auto" src = {Logo} alt = "ITdepartment"></img></Link></MDBNavbarBrand>
            <MDBNavbarNav right className="text-uppercase d-none d-md-flex mr-lg-5">
                <MDBNavItem className="mr-2">
                    <a href="http://itdepartment.pl/#home">Główna</a>
                </MDBNavItem>
                <MDBNavItem className="mr-2">
                    <a href="http://itdepartment.pl/#about">O nas</a>
                </MDBNavItem>
                <MDBNavItem className="mr-2">
                    <a href="http://itdepartment.pl/#projects-section">Projekty</a>
                </MDBNavItem>
                <MDBNavItem className="mr-2">
                    <a href="http://itdepartment.pl/#contact">Kontakt</a>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
    )
}

export default NavBar;
