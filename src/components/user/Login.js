// Core Imports
import React, { useRef, useState } from "react"
import { useAuth } from "../../providers/AuthContext";

// Component Imports
import StaticHeader from "../parts/StaticHeader";

// Bootstrap Imports
import { Row, Col, Form, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    //   const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            //   history.push("/")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    return (
        <>

            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <StaticHeader headerText={"Login"} />
                </Col>
            </Row>

            <Row>
                <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                    <div className="login-container">
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <div className="submit-container">
                                <p><Link to="/" className="btn">Cancel</Link></p>
                                <p><Button disabled={loading} type="submit" className="btn">Log In</Button></p>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>

        </>
    )
}