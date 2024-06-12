// Core Imports
import React, { useRef, useState } from "react";
import { useAuth } from "../../providers/AuthContext";
import { Link } from "react-router-dom";

// Component Imports

// Bootstrap Imports
import { Form, Button, Alert } from "react-bootstrap";

const SignUp = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);
    const { signup } = useAuth(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
        //   history.push("/")
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }
        
    return (
        <>
        
        <h2 className="text-center mb-4">Sign Up</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
        </>
    )
}

export default SignUp;