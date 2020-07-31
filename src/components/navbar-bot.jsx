import React, { Component } from "react";

import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBIcon } from "mdbreact";

/**
 * Navbot
 * Description: Render the bottom navbar with active animation when on specific section. 
 */
class NavBot extends Component {
    state = {
        scrollTop: 0 //Count how much pixels does user scrolled(?XD)
    }

    //Function, that highlights home icon, when window is loaded
    windowOnLoadOverride() {
        window.onload = function () {
            document.getElementById("home-icon").style.color = "coral";
        }
    }

    //Function, that listens when user is scrolling down/up
    listenToScrollEvent() {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                this.calculateScrollDistance();
            });
        });
    }


    //Calculate, "WHERE" the user is on website - to be more specific, what section is on viewport
    calculateScrollDistance() {
        const scrollTop = window.pageYOffset; // how much the user has scrolled by


        const aboutHeight = document.getElementById("home").offsetHeight;
        const projectsHeight = document.getElementById("about").offsetHeight + aboutHeight;
        const contactHeight = document.getElementById("projects-section").offsetHeight + projectsHeight;

        if (scrollTop < aboutHeight) {
            document.getElementById("home-icon").style.color = "coral";
            document.getElementById("about-icon").style.color = "";
            document.getElementById("projects-icon").style.color = "";
            document.getElementById("contact-icon").style.color = "";
        } else if (scrollTop > aboutHeight && scrollTop < projectsHeight) {
            document.getElementById("home-icon").style.color = "";
            document.getElementById("about-icon").style.color = "coral";
            document.getElementById("projects-icon").style.color = "";
            document.getElementById("contact-icon").style.color = "";
        } else if (scrollTop > projectsHeight && scrollTop < contactHeight) {
            document.getElementById("home-icon").style.color = "";
            document.getElementById("about-icon").style.color = "";
            document.getElementById("projects-icon").style.color = "coral";
            document.getElementById("contact-icon").style.color = "";
        } else {
            document.getElementById("home-icon").style.color = "";
            document.getElementById("about-icon").style.color = "";
            document.getElementById("projects-icon").style.color = "";
            document.getElementById("contact-icon").style.color = "coral";
        }
        //Update the state every time that user is scrolling down
        this.setState({
            scrollTop,
        });
    }

    //Bind function to component when everything is ready to display
    componentDidMount() {
        this.windowOnLoadOverride()
        this.listenToScrollEvent()
    }

    render() {
        return (
            <MDBNavbar expand className="d-md-none d-flex fixed-bottom white">
                <MDBNavbarNav className="text-uppercase justify-content-center text-center py-1">
                    <MDBNavItem className="mr-2 mt-1">
                        <a href="#home" id="home-icon" className="d-flex flex-column">
                            <MDBIcon icon="home" size="lg" />
                            <span>Start</span>
                        </a>
                    </MDBNavItem>
                    <MDBNavItem active className="mr-2 mt-1">
                        <a href="#about" id="about-icon" className="d-flex flex-column">
                            <MDBIcon icon="users" size="lg" />
                            <span>O nas</span>
                        </a>
                    </MDBNavItem>
                    <MDBNavItem className="mr-2 d-flex flex-column mt-1">
                        <a href="#projects-section" id="projects-icon" className="d-flex flex-column">
                            <MDBIcon icon="suitcase" size="lg" />
                            <span>Projekty</span>
                        </a>
                    </MDBNavItem>
                    <MDBNavItem className="mr-2 d-flex flex-column mt-1">
                        <a href="#contact" id="contact-icon" className="d-flex flex-column">
                            <MDBIcon icon="envelope" size="lg" />
                            <span>Kontakt</span>
                        </a>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
        )
    }
}

export default NavBot;