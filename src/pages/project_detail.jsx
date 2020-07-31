import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

import projects from "../assets/projects.json";

function ProjectDetail({ match }) {
    console.log(match);
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].slug === match.params.slug) {
            return (
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12">
                            <p>{projects[i].title}</p>
                            <img className="w-100" src={require('../assets/images' + projects[i].previewPhoto)} alt="sadas" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            )
        }
    }
}

export default ProjectDetail;