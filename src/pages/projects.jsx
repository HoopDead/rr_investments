import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import projects from "../assets/projects.json";

import { Link } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
      <MDBContainer fluid id="projects-section" className="min-vh-100">
        <MDBRow>
          {projects.map((project, index) => {
            if (index >= 3) return null;

            return (
              <MDBCol lg="4" xs="12" className="mt-5 py-5 text-center" key={project.slug}>
                <Link to={`/projekt/${project.slug}`}>
                  <img className="img-fluid" alt="First project logo" src={require("../assets/images/" + project.previewPhoto)}></img>
                  <h3 className="mt-5 font-raleway-bold text-center black-text">{project.title}</h3>
                  <p className="text-justify my-4 mx-auto text-w-auto black-text">{project.description}</p>
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