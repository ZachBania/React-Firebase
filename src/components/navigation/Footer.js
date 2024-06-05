// Core Imports
import { useCallback } from 'react';

// Component Imports
import { navigationContext } from './../../App'
import List from '../list/List';
import navValues from './react-routing';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Footer = (props) => (
    
    <footer>

        <Row>
            <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
            </Col>
            <Col className={'col'} sm="true" md="true" lg="true" xl="true" xxl="true">
            </Col>
        </Row>        
        <Row>
            <Col className={'col'} sm="true" md="true" lg="6" xl="6" xxl="6">
                <p>React-Bootstrap</p>
            </Col>
            <Col className={'col'} sm="true" md="true" lg="6" xl="6" xxl="6">
                
            </Col>
        </Row>
    </footer>
    
);
export default Footer;

