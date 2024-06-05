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

const Navigation = (props) => (
    
    <Navbar expand="lg" className="bg-body-tertiary" >

        <Navbar.Brand href="#home">
            <div className="brand-image-container">
                <img alt="" src="./logo512.png" width="30" height="30" className="d-inline-block align-top"/>
            </div>
            <h1>React-Bootstrap</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link onClick={() => props.navigate(navValues.home)}>Home</Nav.Link>
            <Nav.Link onClick={() => props.navigate(navValues.projects)}>Projects</Nav.Link>
            <Nav.Link>Bootstrap Components</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
export default Navigation;

