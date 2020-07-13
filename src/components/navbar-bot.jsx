import React, { Component } from "react";

import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBIcon } from "mdbreact";

class NavBot extends Component {
    state = {
        scrollTop: 0
    }

    listenToScrollEvent() {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                this.calculateScrollDistance();
                console.log(this.state);
            });
        });
    }

    calculateScrollDistance() {
        const scrollTop = window.pageYOffset; // how much the user has scrolled by


        const homeHeight = 0;
        const aboutHeight = document.getElementById("home").offsetHeight;
        const projectsHeight = document.getElementById("about").offsetHeight + aboutHeight;
        const contactHeight = document.getElementById("projects-section").offsetHeight + projectsHeight;

        console.log(homeHeight, aboutHeight, projectsHeight, contactHeight)

        if(scrollTop < aboutHeight) {
            document.getElementById("home-icon").style.color = "coral";
            document.getElementById("about-icon").style.color = "";
            document.getElementById("projects-icon").style.color = "";
            document.getElementById("contact-icon").style.color = "";
        } else if (scrollTop > aboutHeight && scrollTop < projectsHeight) {
            document.getElementById("home-icon").style.color = "";
            document.getElementById("about-icon").style.color = "coral";
            document.getElementById("projects-icon").style.color = "";
            document.getElementById("contact-icon").style.color = "";
        } else if(scrollTop > projectsHeight && scrollTop < contactHeight) {
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

        this.setState({
          scrollTop,
        });
      }


    componentDidMount() {
        this.listenToScrollEvent()
    }
    
    render() {
        return (
            <MDBNavbar expand className="d-md-none d-flex fixed-bottom white">
            <MDBNavbarNav className="text-uppercase justify-content-center text-center py-1">
                <MDBNavItem className="mr-2 mt-1">
                    <a href="#home" className="d-flex flex-column">
                        <MDBIcon id="home-icon" icon="home" size="lg"/>
                        <span>start</span>
                    </a>
                </MDBNavItem>
                <MDBNavItem active className="mr-2 mt-1">
                    <a href="#about" className="d-flex flex-column">
                        <MDBIcon id="about-icon" icon="users" size="lg"/>
                        <span>About Us</span>
                    </a>
                </MDBNavItem>
                <MDBNavItem className="mr-2 d-flex flex-column mt-1">
                    <a href="#projects-section" className="d-flex flex-column">
                        <MDBIcon id="projects-icon" icon="suitcase" size="lg"/>
                        <span>Projects</span>
                    </a>
                </MDBNavItem>
                <MDBNavItem className="mr-2 d-flex flex-column mt-1">
                    <a href="#contact" className="d-flex flex-column">
                        <MDBIcon id="contact-icon" icon="envelope" size="lg"/>
                        <span>Contact</span>
                    </a>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
        )
    }
}

export default NavBot;