// Core Imports
import { useState, useEffect } from 'react';
import { useAuth } from '../../providers/AuthContext';

// Component Imports

// Bootstrap Imports
import Alert from 'react-bootstrap/Alert';


function Flag(props) {
    // 'primary','secondary','success','danger','warning','info','light','dark',
    const [flagState, setFlagState] = useState(true);
    const { resetProjectSubmitState } = useAuth();

    useEffect(() => {
        setTimeout(() => {
            setFlagState(false);
            resetProjectSubmitState();
        }, 5000);
    }, []);

    return (
        <>
            {flagState && (
                <div className='alert-container'>
                    <Alert variant={props.flagStyle} dismissible>
                        <p>{props.text}</p>
                    </Alert>
                </div>
            )}
        </>
    );




}

export default Flag;
