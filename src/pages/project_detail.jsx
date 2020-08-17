import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import projects from "../assets/projects.json";
import Navbar from "../components/navbar.jsx";



function ProjectDetail({ match }) {
    for (var project of projects) {
        if (project.slug === match.params.slug) {
            return (
                <div>
                    <Navbar />
                    <MDBContainer>
                        <MDBRow className="mt-5">
                            <MDBCol md="6" className="py-5 text-left">
                                <h3>{project.title}</h3>
                                <h6 className="font-raleway-bold">Zakres prac: <span className="font-raleway-light">{project.scopeOfWork}</span></h6>
                                <h6 className="font-raleway-bold">Opis: <span className="font-raleway-light">{project.description}</span></h6>
                                <h6 className="font-raleway-bold">Branża: <span className="font-raleway-light">{project.industry}</span></h6>
                            </MDBCol>
                        </MDBRow>
                            <img className = "mw-100 mh-100 img-fluid mx-auto" alt="project_site" src={require("../assets/images/" + project.page)}></img>
                    </MDBContainer>
                </div>
            )
        }
    }
}

export default ProjectDetail;