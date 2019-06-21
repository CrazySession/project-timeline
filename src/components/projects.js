import React from 'react';

import { projects } from '../data/json-projects';

const Projects = () => {
    const createdProjects = projects.map((proj) => {
        return (
            <div key={proj.projectnumber}>
                { proj.projectName }
            </div>
        )
    });

    return <div> { createdProjects.reverse() } </div>
};

export default Projects