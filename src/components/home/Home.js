import './../../App.css';
import React, { useCallback } from 'react';

// Component Imports
import Navigation from '../navigation/Navigation';
import Flag from '../parts/Flag';
import List from '../list/List';
import ComponentSelection from '../navigation/ComponentSelection';
import navValues from '../navigation/react-routing';
import DefaultHeader from '../parts/DefaultHeader';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const REACT_VERSION = React.version;
function Home() {

  return (
    <>
        <Row>
            <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                <DefaultHeader headerText="Home"/>
            </Col>
        </Row>  
    </>
  );
}
export default Home;
