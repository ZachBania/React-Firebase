// Core Imports
import { useState } from 'react';

// Component Imports

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Flag(props) {
    // 'primary','secondary','success','danger','warning','info','light','dark',
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant={props.flagStyle} onClose={() => setShow(false)} dismissible>
                <p>
                {props.text}
                </p>
            </Alert>
        );
    }
  }

export default Flag;
