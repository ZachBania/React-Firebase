// Core Imports
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import exData from "./../../assets/api/exData";

// Component Imports
import StaticHeader from '../parts/StaticHeader';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PageNotFound() {

    return (
    <>
        <Row>
            <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                <StaticHeader headerText={"404 - Page Not Found"}/>
            </Col>
        </Row> 

        <Row>
            <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                <div className="pageNotFound-container">
                    <Link to="/" className="btn">Return home</Link>
                </div>
            </Col>
        </Row>      

    </>
    );
}

export default PageNotFound;
