// Core Imports
import { useState } from 'react';

// Component Imports

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import Badge from 'react-bootstrap/Badge';

function BS_Badge(props) {
    
    // primary, secondary, success, danger, warning, info, light, dark
    
        return ( <Badge bg={props.badgeStyle}>{props.text}</Badge> );
  }

export default BS_Badge;
