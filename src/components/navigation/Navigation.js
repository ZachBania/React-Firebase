// Core Imports
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../providers/AuthContext';
import logo from './logo512.png';

// Component Imports

// Bootstrap Imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = (props) => {
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState("");

    async function handleLogout() {
        setError("")

        try {
            await logout()
            //   history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" >

                <Navbar.Brand href="/">
                    <div className="brand-image-container">
                        <img src={logo} />
                    </div>
                    <h1>React-Bootstrap</h1>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <ul>
                        {currentUser ? (<li><Link to="/dashboard">Dashboard</Link></li>) : '' }
                            <li><Link to="/projects">Projects</Link></li>
                            {currentUser ? (
                                <>
                                    
                                    <li className='mobile'><Link onClick={handleLogout}>Logout</Link></li>
                                </>
                            ) : (
                                <>
                                    <li className='mobile'><Link to="/login">Login</Link></li>
                                    {/* <li><Link to="/signup">SignUp</Link></li> */}
                                </>
                            )}                            
                        </ul>
                    </Nav>
                </Navbar.Collapse>
                <div id="auth-navbar-nav">
                    <Nav className="me-auto">
                        <ul>
                            {currentUser ? (
                                <>
                                    <li><Link onClick={handleLogout}>Logout</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/login">Login</Link></li>
                                    {/* <li><Link to="/signup">SignUp</Link></li> */}
                                </>
                            )}
                        </ul>
                    </Nav>
                </div>
            </Navbar>
        </>
    )
}

export default Navigation;

