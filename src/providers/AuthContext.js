// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../api/firebase';
import { doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [currentFirestoreUser, setCurrentFirestoreUser] = useState({});
    const [users, setUsers] = useState([]);
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState({});

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updateProfile(displayNameVar) {
        return currentUser.updateProfile({
            displayName: displayNameVar
        });
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    async function updateSummary(summary) {
        const userDocRef = doc(db, "Users", currentUser.uid);

        if (summary !== undefined) {
            await updateDoc(userDocRef, {
                summary: summary !== null ? summary : ""
            });

            setCurrentFirestoreUser(prevUser => ({
                ...prevUser,
                summary: summary !== null ? summary : ""
            }));
        }
    }

    async function getProjects() {
        const q = query(collection(db, "Projects"), orderBy('id', 'desc'));
        const querySnapshot = await getDocs(q);
        const projectsList = querySnapshot.docs.map(doc => doc.data());
        setProjects(projectsList);
    }

    async function addProject(p) {
        const projectId = uuidv4();
        await setDoc(doc(db, "Projects", projectId), p);
        setProject(p);
    }

    async function deleteProject(project_id) {
        console.log(project_id);
    }

    async function getUsers() {
        const q = query(collection(db, "Users"), orderBy('role', 'asc'));
        const querySnapshot = await getDocs(q);
        const usersList = querySnapshot.docs.map(doc => doc.data());
        setUsers(usersList);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            setCurrentUser(user);
            if (user) {
                const userDocRef = doc(db, "Users", user.uid);
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                    setCurrentFirestoreUser(userDocSnap.data());
                } else {
                    console.log("currentFirestoreUser not found");
                }
            } else {
                setCurrentFirestoreUser(null);
            }
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        currentFirestoreUser,
        users,
        getUsers,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateProfile,
        updateSummary,
        // Projects
        project,
        setProject,
        addProject,
        deleteProject,
        projects,
        setProjects,
        getProjects,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
