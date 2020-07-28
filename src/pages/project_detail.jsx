import React from "react";

import projects from "../assets/projects.json";

function ProjectDetail({ match }) {
    const id = match.params.id;
    return (
        <div>
            <p>{projects[id].title}</p>
        </div>
    )
}

export default ProjectDetail;