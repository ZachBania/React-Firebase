// Core Imports
import { useState } from "react";
import { useAuth } from "../../providers/AuthContext";
import { Link } from "react-router-dom";

// Component Imports

// Bootstrap Imports

const UserPanel = () => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth();

    const [users, setUsers] = useState([]);

    async function handleLogout() {
        setError("")

        try {
            await logout()
            //   history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
            <div className="user-panel-container">
                {currentUser ? (
                    <>
                        <p>Welcome, {currentUser.displayName}</p>

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