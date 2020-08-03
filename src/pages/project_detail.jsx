import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

import Navbar from "../components/navbar.jsx";


import projects from "../assets/projects.json";

function ProjectDetail({ match }) {
    for (var project of projects) {
        if(project.slug === match.params.slug) {
            return (
                    <div>
                    <Navbar />
                        <MDBContainer>
                            <MDBRow className = "mt-5" center>
                                <MDBCol md="6" className = "py-5 text-left">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </MDBCol>
                                <MDBCol md="6" className = "py-5 text-left">
                                    <h6 className = "font-raleway-bold">Zakres prac: <span className = "font-raleway-light">{project.scopeOfWork}</span></h6>
                                    <h6 className = "font-raleway-bold">Branża: <span className = "font-raleway-light">{project.craft}</span></h6>
                                    <h6 className = "font-raleway-bold">Lokalizacja: <span className = "font-raleway-light">{project.location}</span></h6>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                                  <img className = "img-fluid" alt ="project_site" src={require('../assets/images' + project.page)}></img>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                )
            }
        }
}

export default ProjectDetail;