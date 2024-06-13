
// Core Imports
import React from "react";
import { useAuth } from "../../providers/AuthContext";

// Component Imports
import StaticHeader from "../parts/StaticHeader";
import UsersPanel from "../parts/UsersPanel";
import ProjectsPanel from "../parts/ProjectsPanel";

// Bootstrap Imports
import { Row, Col } from "react-bootstrap";

export default function Dashboard() {
    const { currentUser, currentFirestoreUser, logout } = useAuth()

    return (
        <>
            {currentUser ? (
                <>
                    <Row>
                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                            <StaticHeader headerText={"Dashboard"} />
                        </Col>
                    </Row>

                    <Row>
                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                            <div className="dashboard-container">
                                <h2>All Users</h2>
                                <UsersPanel />

                                <h2>All Projects</h2>
                                <ProjectsPanel />
                            </div>
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