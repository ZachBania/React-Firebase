import React, { useRef, useState } from "react"
import { Row, Col, Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../providers/AuthContext";
import StaticHeader from "../parts/StaticHeader";

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
                        <Button disabled={loading} type="submit">
                            Log In
                        </Button>
                    </Form>
                </Col>
            </Row>

        </>
    )
}