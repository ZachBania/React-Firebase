// Core Imports
import { useEffect } from "react";
import { useAuth } from "../../providers/AuthContext";

// Component Imports

// Bootstrap Imports
import { Table } from "react-bootstrap";

const UsersPanel = () => {
    const { currentUser, users, setUsers, getUsers } = useAuth();

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            {currentUser ? (
                <div className="users-panel-container">

                    <h2>All Users</h2>

                    <Table>
                        <thead>
                            <tr>
                                <th><p>#</p></th>
                                <th><p>First Name</p></th>
                                <th><p>Last Name</p></th>
                                <th><p>Summary</p></th>
                                <th><p>Role</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {users.length > 0 ? (
                                    users.map((user, i) => (
                                        <tr key={user.i}>
                                            <td className="uid"><p>{i}</p></td>
                                            <td className="header"><p>{user.first_name}</p></td>
                                            <td className="description"><p>{user.last_name}</p></td>
                                            <td className="meta"><p>{user.summary}</p></td>
                                            <td className="meta"><p>{user.role}</p></td>
                                        </tr>
                                    ))
                                ) : ('')}
                            </>
                        </tbody>
                    </Table>
                </div>
            ) : ('')}
        </>
    )
}

export default UsersPanel;