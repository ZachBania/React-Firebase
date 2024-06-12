// Core Imports
import React, { useState, useEffect } from "react"
import { useAuth } from "../../providers/AuthContext"
import { Link, useHistory } from "react-router-dom"

// Component Imports
import StaticHeader from "../parts/StaticHeader"
import UsersPanel from "./UsersPanel"

// Bootstrap Imports
import { Row, Col, Alert, Table } from "react-bootstrap"

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, currentFirestoreUser, logout } = useAuth()
    //   const history = useHistory()

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
            {currentUser ? (
                <>
                    <Row>
                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                            <StaticHeader headerText={"Profile"} />
                        </Col>
                    </Row>

                    <Row>
                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">

                            <div className="profile-container">
                                {error && <Alert variant="danger">{error}</Alert>}
                                <p className="id">ID: {currentUser.uid}</p>
                                <p className="name">Name: {currentFirestoreUser.first_name + " " + currentFirestoreUser.last_name}</p>
                                <p className="email">Email: {currentUser.email ? currentUser.email : ''}</p>
                                <p className="summary">Summary: {currentFirestoreUser.summary}</p>
                                <p className="role">Role: {currentFirestoreUser.role}</p>
                                <p><Link to="/update-profile" className="btn">Update Profile</Link></p>
                            </div>

                        </Col>
                    </Row>

                    <Row>
                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                            <UsersPanel />
                        </Col>
                    </Row>
                </>
            ) : (
                <>
                </>
            )}

        </>
    )
}