import React, { useState } from "react"
import { Row, Col, Card, Button, Alert, Table } from "react-bootstrap"
import { useAuth } from "../../providers/AuthContext"
import { Link, useHistory } from "react-router-dom"
import StaticHeader from "../parts/StaticHeader"
import UsersPanel from "./UsersPanel"

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    //   const history = useHistory()

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

            {currentUser ? (
                <>
                    <Row>
                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                            <StaticHeader headerText={"Profile"} />
                        </Col>
                    </Row>

                    <Row>
                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">

                            {error && <Alert variant="danger">{error}</Alert>}

                            <Table>
                                <thead>
                                    <tr>
                                        <th><p>#</p></th>
                                        <th><p>First Name</p></th>
                                        <th><p>Last Name</p></th>
                                        <th><p>Email</p></th>
                                        <th><p>Summary</p></th>
                                        <th><p>Role</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="id"><p></p></td>
                                        <td className="first_name"><p></p></td>
                                        <td className="last_name"><p></p></td>
                                        <td className="email"><p>{currentUser.email}</p></td>
                                        <td className="summary"><p></p></td>
                                        <td className="role"><p></p></td>
                                    </tr>
                                </tbody>
                            </Table>


                            <p>
                                <Link to="/update-profile" className="btn">
                                    Update Profile
                                </Link>
                            </p>

                        </Col>
                    </Row>

                    <Row>
                        <Col className={'col'} sm="12" md="12" lg="12" xl="12" xxl="12">
                            <UsersPanel />
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