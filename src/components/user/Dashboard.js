
// Core Imports
import React from "react";
import { useAuth } from "../../providers/AuthContext";

// Component Imports
import StaticHeader from "../parts/StaticHeader";
import UsersPanel from "../parts/UsersPanel";
import ProjectsPanel from "../parts/ProjectsPanel";
import AddProject from "../parts/AddProject";
import Profile from "./Profile";

// Bootstrap Imports
import { Row, Col, Accordion } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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

                                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                    <Tab eventKey="profile" title="Profile">
                                        <h2>Profile</h2>
                                        <Profile />
                                    </Tab>
                                    <Tab eventKey="project" title="All Projects">

                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Add Project</Accordion.Header>
                                                <Accordion.Body>
                                                    <AddProject />
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>

                                        <h2>All Projects</h2>
                                        <ProjectsPanel />                                        
                                    </Tab>
                                    <Tab eventKey="user" title="All Users">
                                        <h2>All Users</h2>
                                        <UsersPanel />
                                    </Tab>
                                </Tabs>


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