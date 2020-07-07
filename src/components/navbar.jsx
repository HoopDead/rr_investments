import React from "react";

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";

function NavBar() {
   
    return (
        <MDBNavbar expand="md">
            <MDBNavbarBrand>Rybiański & Roman <span className="font-weight-bold">Investments</span></MDBNavbarBrand>
            <MDBNavbarNav right className="text-uppercase">
                <MDBNavItem className="mr-2">
                    <a href="przyklad">start</a>
                </MDBNavItem>
                <MDBNavItem className="mr-2">
                    <a href="przyklad2">About Us</a>
                </MDBNavItem>
                <MDBNavItem className="mr-2">
                    <a href="przyklad3">Projects</a>
                </MDBNavItem>
                <MDBNavItem className="mr-2">
                    <a href="przyklad4">Contact</a>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
    )
}

export default NavBar;
