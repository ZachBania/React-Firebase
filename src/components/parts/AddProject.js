// Core Imports
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../providers/AuthContext";

// Component Imports
import BS_Badge from "./BS_Badge";

// Bootstrap Imports
import { Stack, Table, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
    const { currentUser } = useAuth();
    const { project, setProject, addProject } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const idRef = useRef();
    const headerRef = useRef();
    const descriptionRef = useRef();
    const excerptRef = useRef();
    const metaRef = useRef();
    const categoryOwnerRef = useRef();

    async function handleProjectSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError("");

        const p = {
            id: parseInt(idRef.current.value),
            header: headerRef.current.value,
            description: descriptionRef.current.value,
            excerpt: excerptRef.current.value,
            meta: metaRef.current.value,
            category_owner: categoryOwnerRef.current.value
        }

        try {
            await addProject(p);
            setLoading(false);
            navigate(0);
        } catch (error) {
            setError("Failed to add project: " + error.message);
            setLoading(false);
        }
    }

    return (
        <>
            {currentUser ? (
                <div className="add-project-container">

                    <Form onSubmit={handleProjectSubmit}>

                        <Form.Group id="id">
                            <Form.Label>#</Form.Label>
                            <Form.Control
                                type="number"
                                ref={idRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group id="header">
                            <Form.Label>Header</Form.Label>
                            <Form.Control
                                type="text"
                                ref={headerRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group id="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea" rows={3}
                                ref={descriptionRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group id="excerpt">
                            <Form.Label>Excerpt</Form.Label>
                            <Form.Control
                                as="textarea" rows={3}
                                ref={excerptRef}
                                required
                            />
                        </Form.Group>                        

                        <Form.Group id="meta">
                            <Form.Label>Meta</Form.Label>
                            <Form.Control
                                type="text"
                                ref={metaRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group id="category_owner">
                            <Form.Label>Category (Owner)</Form.Label>
                            <Form.Control
                                type="text"
                                ref={categoryOwnerRef}
                                required
                            />
                        </Form.Group>


                        <div className="submit-container">
                            <p><Button disabled={loading} type="submit" className="btn">Add Project</Button></p>
                        </div>
                    </Form>






                </div>
            ) : ('')}
        </>
    )
}

export default AddProject;