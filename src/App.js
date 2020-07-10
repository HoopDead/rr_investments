/* Everything else */
import React, { Component } from "react";
import { Router } from "@reach/router";

/* Here we imnport assets */
import "./index.css";
/* here we import pages or components */

import Navbar from "./components/navbar.jsx"
import Home from "./pages/home.jsx";
import AboutUs from "./pages/about_us.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
import NavBot from "./components/navbar-bot.jsx"


class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
            {/* Routing. Path attribute defines a relative address  */}
              <Home path="/home"/>
              <AboutUs path="/about"/>
              <Contact path="contact"/>
              <Projects path="/projects"/>
          <NavBot></NavBot>
      </div>
    );
  }
}

export default App;
