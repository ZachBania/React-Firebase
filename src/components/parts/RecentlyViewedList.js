// Core Imports
import { useState, useEffect } from "react";
import { useAuth } from "../../providers/AuthContext";
import { Link } from "react-router-dom";

// Component Imports

// Bootstrap Imports

const RecentlyViewedList = () => {
    const { currentUser, getRecentlyViewedProjects } = useAuth();
    const [recentProjects, setRecentProjects] = useState([]);

    useEffect(() => {
        const fetchRecentlyViewedProjects = async () => {
            if (currentUser) {
                const projects = await getRecentlyViewedProjects();
                setRecentProjects(projects);
            }
        };
        fetchRecentlyViewedProjects();
    }, [currentUser, getRecentlyViewedProjects]);

    return (
        <>
            {recentProjects.length > 0 ? (
                <div className="recently-viewed-list-container">
                    <h3>Recently viewed:</h3>
                    <ul className="recently-viewed-list">
                        {recentProjects.map((project) => (
                            <li><Link to={`/projects/${project.id}`}><span className="id">{project.id}</span>{project.header}</Link></li>
                        ))}
                    </ul>
                </div>
            ) : ''}
        </>
    )
}

export default RecentlyViewedList;