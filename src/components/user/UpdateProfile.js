// Core Imports
import React, { useRef, useState } from "react"
import { useAuth } from "../../providers/AuthContext"
import { Link, useHistory } from "react-router-dom"

// Component Imports
import StaticHeader from "../parts/StaticHeader"

// Bootstrap Imports
import { Row, Col, Form, Button, Alert } from "react-bootstrap"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const displayNameRef = useRef()

  const { currentUser, updatePassword, updateEmail, updateProfile } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  //   const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (displayNameRef.current.value) {
      promises.push(updateProfile(displayNameRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        // history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      {currentUser ? (
        <>

          <Row>
            <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
              <StaticHeader headerText={"Update Profile"} />
            </Col>
          </Row>
          <Row>
            <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">

              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="displayName">
                  <Form.Label>Display Name</Form.Label>
                  <Form.Control
                    type="displayName"
                    ref={displayNameRef}
                    required
                    defaultValue={currentUser.displayName}
                  />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                    defaultValue={currentUser.email}
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    placeholder="Leave blank to keep the same"
                  />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    placeholder="Leave blank to keep the same"
                  />
                </Form.Group>
                <Button disabled={loading} type="submit">
                  Update
                </Button>
              </Form>

              <div>
                <Link to="/">Cancel</Link>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <>
        </>
      )}

    </>
  )
}