// Core Imports
import { useState } from 'react';

// Component Imports

// Bootstrap Imports
import Alert from 'react-bootstrap/Alert';

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
