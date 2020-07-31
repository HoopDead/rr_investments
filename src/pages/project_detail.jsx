import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

import projects from "../assets/projects.json";

function ProjectDetail({ match }) {
    for (var project of projects) {
        if(project.slug === match.params.slug) {
            return (
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12">
                            <p>{project.title}</p>
                            <img className="w-100" src={require('../assets/images' + project.previewPhoto)} alt="sadas" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                )
            }
        }
}

export default ProjectDetail;