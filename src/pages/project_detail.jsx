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
                                <MDBCol md="6" className = "py-5 text-right">
                                    <h6><span className = "font-raleway-bold">Zakres prac:</span> </h6>
                                    <h6><span className = "font-raleway-bold">Branża:</span></h6>
                                    <h6><span className = "font-raleway-bold">Lokalizacja:</span></h6>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                )
            }
        }
}

export default ProjectDetail;