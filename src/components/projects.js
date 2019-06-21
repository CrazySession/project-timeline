import React from 'react';

import { projects } from '../data/json-projects';

const Projects = () => {
    const createdProjects = projects.map((proj) => {
        return (
            <div key={proj.projectnumber}>
                <h2>{ proj.projectName }</h2> <hr />
                Url  :  <a href={ proj.url } target='_blank' rel='noopener noreferrer' >{ proj.url }</a>
                <br/><br/>
                { proj.description }
                <br/><br/>
                { proj.usedTechnics }
                <br/><br/>
                First Deployment : { proj.firstUpload }
                <br/><br/>
                Last Update : { proj.lastUpdate }
                <br/><br/><br/>
            </div>
        )
    });

    return <div> { createdProjects.reverse() } </div>
};

export default Projects