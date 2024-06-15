// Core Imports
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../providers/AuthContext";
import { useNavigate } from "react-router-dom";

// Component Imports
import StaticHeader from "./StaticHeader";
import PageNotFound from "../navigation/PageNotFound";

// Bootstrap Imports
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

// UpdateProject.js
const UpdateProject = (props) => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [projectsFetched, setProjectsFetched] = useState(false);
    const { currentUser, projects, getProjects, updateProject, deleteProject } = useAuth();

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const idRef = useRef();
    const headerRef = useRef();
    const descriptionRef = useRef();
    const excerptRef = useRef();
    const metaRef = useRef();
    const categoryOwnerRef = useRef();

    useEffect(() => {
        async function fetchData() {
            await getProjects();
            setProjectsFetched(true); 
        }

        if (!projectsFetched) {
            fetchData();
        }
    }, [getProjects, projectsFetched]);

    useEffect(() => {
        if (projects.length > 0) {
            const selectedProject = projects.find(proj => proj.id === parseInt(id));
            setProject(selectedProject);
        }
    }, [projects, id]);

    if (!project) {
        return <PageNotFound />;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
    
        const p = { 
            id: project.id,
            header: headerRef.current.value || project.header,
            description: descriptionRef.current.value || project.description,
            excerpt: excerptRef.current.value || project.excerpt,
            meta: metaRef.current.value || project.meta,
            category_owner: categoryOwnerRef.current.value || project.category_owner
        };
    
        try {
            await updateProject(p);
            setLoading(false);
            navigate("/dashboard");
        } catch (error) {
            setError("Failed to update project: " + error.message);
            setLoading(false);
        }
    }

    async function handleDelete() {
        setLoading(true);
        setError("");

        try {
            await deleteProject(project.id);
            setLoading(false);
            navigate("/dashboard");
        } catch (error) {
            setError("Failed to delete project: " + error.message);
            setLoading(false);
        }
    }

    return (
        <>
            {currentUser ? (
                <>
                    <Row>
                        <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                            <StaticHeader headerText={"Update " + project.header} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                            <div className="update-project-container">
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="id">
                                        <Form.Label>#</Form.Label>
                                        <Form.Control
                                            type="number"
                                            ref={idRef}
                                            defaultValue={project.id}
                                            readOnly
                                        />
                                    </Form.Group>

                                    <Form.Group id="header">
                                        <Form.Label>Header</Form.Label>
                                        <Form.Control
                                            type="text"
                                            ref={headerRef}
                                            defaultValue={project.header}
                                        />
                                    </Form.Group>

                                    <Form.Group id="description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            as="textarea" rows={3}
                                            ref={descriptionRef}
                                            defaultValue={project.description}
                                        />
                                    </Form.Group>

                                    <Form.Group id="excerpt">
                                        <Form.Label>Excerpt</Form.Label>
                                        <Form.Control
                                            as="textarea" rows={3}
                                            ref={excerptRef}
                                            defaultValue={project.excerpt}
                                        />
                                    </Form.Group>

                                    <Form.Group id="meta">
                                        <Form.Label>Meta</Form.Label>
                                        <Form.Control
                                            type="text"
                                            ref={metaRef}
                                            defaultValue={project.meta}
                                        />
                                    </Form.Group>

                                    <Form.Group id="category_owner">
                                        <Form.Label>Category (Owner)</Form.Label>
                                        <Form.Control
                                            type="text"
                                            ref={categoryOwnerRef}
                                            defaultValue={project.category_owner}
                                        />
                                    </Form.Group>

                                    <div className="submit-container">
                                        <p><Link to="/dashboard" className="btn">Cancel</Link></p>
                                        <p><Button disabled={loading} type="submit" className="btn">Update Project</Button></p>
                                        <p><Button disabled={loading} onClick={handleDelete} className="btn btn-danger">Delete Project</Button></p>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </>
            ) : ('')}
        </>
    );
}

export default UpdateProject;
