// Core Imports
import { useEffect } from "react";
import { useAuth } from "../../providers/AuthContext";
import { useNavigate } from "react-router-dom";

// Component Imports

// Bootstrap Imports
import { Table } from "react-bootstrap";

const ProjectsPanel = () => {
    const { currentUser } = useAuth();
    const { projects, setProjects, getProjects, deleteProject } = useAuth();
    let navigate = useNavigate();

    useEffect(() => {
        getProjects();
    }, []);

    function updateProjectRoute(project_id) {
        const path = `/update-project/${project_id}`;
        navigate(path);
    }

    return (
        <>
            {currentUser ? (
                <div className="projects-panel-container">

                    <h2>All Projects</h2>
                    
                    <Table>
                        <thead>
                            <tr>
                                <th><p>#</p></th>
                                <th><p>Header</p></th>
                                <th><p>Excerpt</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {projects.length > 0 ? (
                                    projects.map((project, id) => (
                                        <tr key={project.id} onClick={() => updateProjectRoute(project.id)}>
                                            <td className="id"><p>{project.id}</p></td>
                                            <td className="header"><p>{project.header}</p></td>
                                            <td className="excerpt"><p>{project.excerpt}</p></td>
                         
                                        </tr>
                                    ))
                                ) : ('')}
                            </>
                        </tbody>
                    </Table>
                </div>
            ) : ('')}
        </>
    )
}

export default ProjectsPanel;