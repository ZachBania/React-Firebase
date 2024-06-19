// Core Imports
import { useState, useEffect } from "react";
import { useAuth } from "../../providers/AuthContext";
import { Link } from "react-router-dom";

// Component Imports

// Bootstrap Imports

const UserPanel = () => {
    const [error, setError] = useState("")
    const { currentUser, currentFirestoreUser, getRecentlyViewedProjects } = useAuth();
    

    return (
        <>
            <div className="user-panel-container">
                {currentUser ? (
                    <>
                        
                    </>
                ) : (
                    <>
                        <p>Please <Link to="/login">login</Link> to gain access to more functionality.</p>
                    </>
                )}
            </div>
        </>
    )
}

export default UserPanel;