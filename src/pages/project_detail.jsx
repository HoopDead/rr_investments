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
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <img className = "w-100 mx-auto" alt="project_site" src={require("../assets/images/" + project.page)}></img>
                        </MDBRow>
                    </MDBContainer>
                </div>
            )
        }
    }
}

export default ProjectDetail;