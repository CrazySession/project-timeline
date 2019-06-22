import React from 'react';

import { projects } from '../data/json-projects';

const Projects = () => {
    const createdProjects = projects.map((proj) => {
        return (
            <div key={proj.projectnumber} style={ proj.projectnumber % 2 ? {marginLeft: '20%' }:{marginLeft:'60%'}}>
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={proj.screenshots[0]}
                                 className="card-img"
                                 style={{width:'100%', height:'60%'}}
                                 alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{ proj.projectName }</h5>
                                <p className="card-text">{ proj.description }</p>
                                <p className="card-text">
                                    <small className="text-muted">
                                    First Deployment : { proj.firstUpload }
                                    <br/>
                                    Last Update : { proj.lastUpdate }</small></p>
                                    <a href={ proj.url }
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       className="btn btn-primary">View Live Project</a>
                                    <a href={ proj.sourceURL }
                                       style={{marginLeft: '5px'}}
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       className="btn btn-primary">View Source Code</a>
                                <br /><br />
                                    <p className="card-text">
                                        <small className="text-muted">
                                            <b>
                                                { proj.usedTechnics }
                                            </b>
                                        </small>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return <div> { createdProjects.reverse() } </div>
};

export default Projects