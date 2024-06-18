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

const UpdateProject = (props) => {
    const { id } = useParams(); 
    const { currentUser, projects, getProjects, updateProject, deleteProject, setProjectSubmitState } = useAuth(); 
    const navigate = useNavigate(); 
    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false); 
    const [project, setProject] = useState(null); 
    const idRef = useRef(); 
    const headerRef = useRef(); 
    const descriptionZeroRef = useRef(); 
    const descriptionOneRef = useRef();
    const descriptionTwoRef = useRef();
    const excerptRef = useRef();
    const metaRef = useRef();
    const categoryOwnerRef = useRef();


    useEffect(() => {
        async function fetchData() {
            await getProjects(); 
        }
        fetchData();
    }, [getProjects]); 

    useEffect(() => {
        const selectedProject = projects.find(proj => proj.id === parseInt(id));
        setProject(selectedProject); 
    }, [projects, id]); 

    if (!project) {
        return <PageNotFound />;
    }
    async function handleSubmit(e) {
        e.preventDefault(); 
        setLoading(true); 
        setError(""); 

        const updatedProject = {
            id: project.id,
            header: headerRef.current.value || project.header,
            description: [
                descriptionZeroRef.current.value || project.description[0],
                descriptionOneRef.current.value || project.description[1],
                descriptionTwoRef.current.value || project.description[2]
            ],
            excerpt: excerptRef.current.value || project.excerpt,
            meta: metaRef.current.value || project.meta,
            category_owner: categoryOwnerRef.current.value || project.category_owner
        };

        try {
            await updateProject(updatedProject); 
            setProjectSubmitState({ status: true, action: "updated", project: updatedProject.header });
            setLoading(false); 
            navigate("/dashboard/projects"); 
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
            navigate("/dashboard/projects");
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

                                    <div id="description">
                                        <Form.Group id="description_zero">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control
                                                as="textarea" rows={3}
                                                ref={descriptionZeroRef}
                                                defaultValue={project.description[0]}
                                            />
                                        </Form.Group>
                                        <Form.Group id="description_one">
                                            <Form.Control
                                                as="textarea" rows={3}
                                                ref={descriptionOneRef}
                                                defaultValue={project.description[1]}
                                            />
                                        </Form.Group>
                                        <Form.Group id="description_two">
                                            <Form.Control
                                                as="textarea" rows={3}
                                                ref={descriptionTwoRef}
                                                defaultValue={project.description[2]}
                                            />
                                        </Form.Group>
                                    </div>

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
                                        <p><Link to="/dashboard/projects" className="btn">Cancel</Link></p>
                                        <p><Button disabled={loading} type="submit" className="btn">Update Project</Button></p>
                                        <p><Button onClick={handleDelete} className="btn">Delete Project</Button></p>
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
