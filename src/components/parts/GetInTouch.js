
// Core Imports
import {  useState } from 'react';
import React from 'react';

// Component Imports

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const REACT_VERSION = React.version;
function GetInTouch(props) {
    // 'primary','secondary','success','danger','warning','info','light','dark',
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Row>
                <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">

                </Col>
            </Row>
        );
    }
  }

export default GetInTouch;



