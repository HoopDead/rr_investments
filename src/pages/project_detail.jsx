import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

import projects from "../assets/projects.json";

function ProjectDetail({ match }) {
    const id = match.params.id;
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="12">
                    <p>{projects[id].title}</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default ProjectDetail;