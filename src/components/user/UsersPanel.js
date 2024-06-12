
import { useContext, useState, useEffect } from "react";
import AuthContext, { useAuth } from "../../providers/AuthContext";
import { Link } from "react-router-dom";
import { Card, Button, Alert, Table } from "react-bootstrap"
import { db } from '../../api/firebase';
import { doc, getDoc, getDocs, getFirestore, addDoc, collection } from 'firebase/firestore';



const UsersPanel = () => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth();

    const [users, setUsers] = useState([]);

    async function handleLogout() {
        setError("")

        try {
            await logout()
            //   history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "Users"));
        const users = querySnapshot.docs.map(
            doc => ({ id: doc.id, ...doc.data() })
        );
        setUsers(users);
        console.log(users);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <div className="users-panel-container">
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
                        {currentUser ? (
                            <>
                                {users.length > 0 ? (
                                    users.map((user, i) => (
                                        <tr key={user.id}>
                                            <td className="id"><p>{i + 1}</p></td>
                                            <td className="first_name"><p>{user.first_name}</p></td>
                                            <td className="last_name"><p>{user.last_name}</p></td>
                                            <td className="email"><p>{user.email.toLowerCase()}</p></td>
                                            <td className="summary"><p>{user.summary}</p></td>
                                            <td className="role"><p>{user.role} </p></td>
                                        </tr>
                                    ))
                                ) : ('')}
                            </>
                        ) : ('')}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default UsersPanel;