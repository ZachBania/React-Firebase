// Core Imports
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import exData from "../../api/exData";

// Component Imports
import StaticHeader from '../parts/StaticHeader';
import PageNotFound from "../navigation/PageNotFound";

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Project(props) {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    // Fetch project details based on ID
    useEffect(() => {
        // Assuming exData is available globally or imported
        const selectedProject = exData.find(proj => proj.id === parseInt(id));
        setProject(selectedProject);
    }, [id]);

    // If project is still loading or not found, display appropriate message
    if (!project) {
        return <PageNotFound />;
    }

    return (
        <>
            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <StaticHeader headerText={project.name} />
                </Col>
            </Row>

            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <div className="project-detail-container">
                        <p className="project-excerpt">{project.excerpt}</p>
                        <Link to="/projects" className="btn">Back to projects</Link>
                    </div>
                </Col>
            </Row>

        </>
    );
}

export default Project;
