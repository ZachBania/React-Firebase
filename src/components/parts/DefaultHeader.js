
// Core Imports
import { useState } from 'react';
import React from 'react';

// Component Imports

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const REACT_VERSION = React.version;
// const FIREBASE_VERSION = FirebaseFirestore.version;

function DefaultHeader(props) {
    // 'primary','secondary','success','danger','warning','info','light','dark',
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Row>
                <Col className={'default-header-component col'} sm="true" md="true" lg="true" xl="true" xxl="true">
                <h1>{props.headerText} - React ({REACT_VERSION})</h1>
                </Col>
            </Row>
        );
    }
  }

export default DefaultHeader;



