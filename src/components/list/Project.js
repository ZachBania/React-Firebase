// Core Imports
import './../../App.css';
import React, { useCallback, useContext } from 'react';

// Component Imports
import ComponentSelection from '../navigation/ComponentSelection';
import navValues from '../navigation/react-routing';
import { navigationContext } from '../../App';
import StaticHeader from '../parts/StaticHeader';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function Project(props) {

  const { param: project } = useContext(navigationContext);

  return (
    
    <>
        <Row>
            <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                <StaticHeader headerText={project.name}/>
            </Col>
        </Row> 

        <Row>
            <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                <div className="project-detail-container">
                    <p className="project-description">{project.description}</p>
                    
                </div>
            </Col>
        </Row>          
    </>

  );
}
export default Project;
