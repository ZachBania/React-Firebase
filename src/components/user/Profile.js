// Core Imports
import React, { useState, useEffect } from "react";
import { useAuth } from "../../providers/AuthContext";
import { Link, useHistory } from "react-router-dom";

// Component Imports

// Bootstrap Imports
import { Alert } from "react-bootstrap";

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, currentFirestoreUser, logout } = useAuth()
    //   const history = useHistory()

    return (
        <>
            {currentUser ? (
                <>
                    <div className="profile-container">
                        {error && <Alert variant="danger">{error}</Alert>}

                        <p className="id">ID: {currentUser.uid}</p>
                        <p className="name">Name: {currentFirestoreUser.first_name + " " + currentFirestoreUser.last_name}</p>
                        <p className="email">Email: {currentUser.email ? currentUser.email : ''}</p>
                        <p className="summary">Summary: {currentFirestoreUser.summary}</p>
                        <p className="role">Role: {currentFirestoreUser.role}</p>
                        <p><Link to="/update-profile" className="btn">Update Profile</Link></p>

                    </div>
                </>
            ) : (
                <>
                </>
            )}

        </>
    )
}