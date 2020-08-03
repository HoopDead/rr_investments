import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

import { Link } from "react-router-dom";

class Projects extends Component {
  render() {

    const projects = [
      {
        "id": 0,
        "title": "Miss Dress",
        "description": "Projekt stworzony dla salonu sukien ślubnych Miss Dress. Do głównych zadań firmy wchodziło wykonanie kompleksowej strony internetowej, która ułatwi znalezienie produktu w sieci. Dodatkowo przyśpieszając sposób komunikacji z salonem.",
        "previewPhoto": require("../assets/images/missdress.png"),
        "slug": "project-miss-dress",
        "scopeOfWork": "React, JavaScript, CSS3, HTML5 oraz MDBootstrap",
        "craft": "Szeroko pojęta branża modowa, z nastawieniem na suknie ślubne oraz garnitury",
        "location": "Francja, Paryż",
        "page": require("../assets/images/miss_dress_site.png")
      },
      {
        "id": 1,
        "title": "Strzyga",
        "description": "Przykładowy layout strony typu landing page - stworzony w ciągu procesu prezentacji dla salonu fryzjerskiego Strzyga.",
        "previewPhoto": require("../assets/images/strzyga.png"),
        "slug": "project-strzyga",
        "scopeOfWork": "React, JavaScript, CSS3, HTML5 oraz MDBootstrap",
        "craft": "Szeroko pojęta branża fryzjerska",
        "location": "Kaedwen, Kaer Morhen",
        "page": require("../assets/images/strzyga_site.png")
      },
      {
        "id": 2,
        "title": "Sashimi Sushi",
        "description": "Prototyp designerski strony typu landing page dla franczyzowego dystrybutora restauracji Japońskich w Polsce.",
        "previewPhoto": require("../assets/images/sushi.png"),
        "slug": "project-sushi",
        "scopeOfWork": "React, JavaScript, CSS3, HTML5 oraz MDBootstrap",
        "craft": "Gastronomia, z nastawieniem na dania typowo Japońskie, głównie sushi",
        "location": "Japonia, Tokio",
        "page": require("../assets/images/sashimi_sushi_site.png")
      }
    ]

    return (
      <MDBContainer fluid id="projects-section" className="min-vh-100">
        <MDBRow>
          {projects.map((project, index) => {
            if (index >= 3) return null;

            return (
              <MDBCol lg="4" xs="12" className="mt-5 py-5 text-center" key={project.slug}>
                <Link to={`/projekt/${project.slug}`}>
                  <img className="img-fluid" alt="First project logo" src={project.previewPhoto}></img>
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