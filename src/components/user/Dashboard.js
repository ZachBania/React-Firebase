// Core Imports
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthContext";

// Component Imports
import StaticHeader from "../parts/StaticHeader";
import UsersPanel from "../parts/UsersPanel";
import ProjectsPanel from "../parts/ProjectsPanel";
import AddProject from "../parts/AddProject";
import Profile from "./Profile";
import Flag from "../parts/Flag";

// Bootstrap Imports
import { Row, Col, Accordion } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Dashboard() {
    const { currentUser, currentFirestoreUser, projectSubmitState, resetProjectSubmitState } = useAuth();
    const { eventKey } = useParams(); 
    const navigate = useNavigate(); 
    const [activeKey, setActiveKey] = useState(eventKey || "profile"); 

    // Update activeKey when eventKey changes
    useEffect(() => {
        setActiveKey(eventKey || "profile");
    }, [eventKey]);

    // Function to handle tab change and update URL
    const handleTabChange = (selectedKey) => {
        navigate(`/dashboard/${selectedKey}`);
    };

    return (
        <>
            {currentUser ? (
                <>
                    {projectSubmitState?.status && projectSubmitState?.action && projectSubmitState?.project && (
                        <Flag text={`${projectSubmitState.project} has been successfully ${projectSubmitState.action}.`} flagStyle="primary" />
                    )}
                    {/* {<Flag text={`test`} flagStyle="primary" />} */}
                    <Row>
                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                            <StaticHeader headerText={"Dashboard"} />
                        </Col>
                    </Row>

                    <Row>
                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                            <div className="dashboard-container">

                                <Tabs
                                    activeKey={activeKey}
                                    onSelect={handleTabChange}
                                    id="dashboard-tabs"
                                >
                                    <Tab eventKey="profile" title="Profile">
                                        <h2>Profile</h2>
                                        <Profile />
                                    </Tab>
                                    <Tab eventKey="projects" title="All Projects">

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
                                    <Tab eventKey="users" title="All Users">
                                        <h2>All Users</h2>
                                        <UsersPanel />
                                    </Tab>
                                </Tabs>

                            </div>
                        </Col>
                    </Row>
                </>
            ) : ('')}

        </>
    )
}
