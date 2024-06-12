// Core Imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Component Imports
import StaticHeader from '../parts/StaticHeader';
import Flag from './../parts/Flag';
import BS_Badge from "../parts/BS_Badge";

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function Bootstrap() {

    const [flagState, setFlagState] = useState(false);

    function toggleFlagState() {
        if(flagState == false) {
            setFlagState((flagState) => true);
        } else {
            setFlagState((flagState) => false);
        }
    }

    return (
    <>
        { flagState && <Flag flagStyle="primary" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>}
        <Row>
            <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                <StaticHeader headerText={"Bootstrap"}/>
            </Col>
        </Row> 

        <Row>
            <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                <div className="bootstrap-container">
                    <Row>

                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                            <Link onClick={toggleFlagState} className="btn">Toggle Alert Flag</Link>
                        </Col>

                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                            
                            <Stack direction="horizontal" gap={2}>
                                <BS_Badge badgeStyle="primary" text="Primary" />
                                <BS_Badge badgeStyle="secondary" text="Secondary" />
                                <BS_Badge badgeStyle="success" text="Success" />
                                <BS_Badge badgeStyle="danger" text="Danger" />
                                <BS_Badge badgeStyle="warning" text="Warning" />
                                <BS_Badge badgeStyle="info" text="Info" />
                                <BS_Badge badgeStyle="light" text="Light" />
                                <BS_Badge badgeStyle="dark" text="Dark" />
                            </Stack>
                        </Col>

                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                            
                        </Col>

                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                            
                        </Col>                        

                    </Row> 
                     
                </div>
            </Col>
        </Row>      

    </>
    );
}

export default Bootstrap;
