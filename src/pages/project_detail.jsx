import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

import Navbar from "../components/navbar.jsx";



function ProjectDetail({ match }) {
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
    ];

    for (var project of projects) {
        if (project.slug === match.params.slug) {
            return (
                <div>
                    <Navbar />
                    <MDBContainer>
                        <MDBRow className="mt-5" center>
                            <MDBCol md="6" className="py-5 text-left">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </MDBCol>
                            <MDBCol md="6" className="py-5 text-left">
                                <h6 className="font-raleway-bold">Zakres prac: <span className="font-raleway-light">{project.scopeOfWork}</span></h6>
                                <h6 className="font-raleway-bold">Branża: <span className="font-raleway-light">{project.craft}</span></h6>
                                <h6 className="font-raleway-bold">Lokalizacja: <span className="font-raleway-light">{project.location}</span></h6>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <img className="img-fluid" alt="project_site" src={project.page}></img>
                        </MDBRow>
                    </MDBContainer>
                </div>
            )
        }
    }
}

export default ProjectDetail;