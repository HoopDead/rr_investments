import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import projects from "../assets/projects.json";

import { Link } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
      <MDBContainer fluid id="projects-section" className="min-vh-100">
          <h3 className = "mx-auto text-center"><span className = "font-raleway-bold">Wybrane realizacje</span></h3>
          <hr className = "w-25 text-center projects-hr"></hr>
        <MDBRow>
          {projects.map((project, index) => {
            if (index >= 3) return null;

            return (
              <MDBCol lg="4" xs="12" className="mt-2 py-5 text-center" key={project.slug}>
                <Link to={`/projekt/${project.slug}`}>
                  <img alt="First project logo" src={require("../assets/images/" + project.previewPhoto)}></img>
                </Link>
              </MDBCol>
            )
          })}

        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Projects;