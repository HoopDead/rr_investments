/* Everything else */
import React, { Component } from "react";

/* Here we imnport assets */
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
/* here we import pages or components */

import Navbar from "../components/navbar.jsx";
import Home from "./home.jsx";
import AboutUs from "./about_us.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";
import NavBot from "../components/navbar-bot.jsx";

class Landing extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Home />
                <AboutUs />
                <Projects />
                <Contact />
                <NavBot />
            </div>
        );
    }
}

export default Landing;