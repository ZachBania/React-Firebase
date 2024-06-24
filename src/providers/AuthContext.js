import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../api/firebase';
import { doc, getDoc, setDoc, updateDoc, deleteDoc, collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export function useAuth() { 
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState();
    const [currentFirestoreUser, setCurrentFirestoreUser] = useState({});
    const [users, setUsers] = useState([]);
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState({});
    const [projectSubmitState, setProjectSubmitState] = useState({ status: false, action: false, project: false });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            setCurrentUser(user);
            if (user) {
                const userDocRef = doc(db, "Users", user.uid);
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                    setCurrentFirestoreUser(userDocSnap.data());
                }
            } else {
                setCurrentFirestoreUser(null);
            }
        });

        return unsubscribe;
    }, []);

    const login = async (email, password) => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            navigate('/dashboard/profile');
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    const logout = async () => {
        try {
            await auth.signOut();
            navigate('/login');
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
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
        return currentUser.updatePassword(password);
    }

    async function updateSummary(summary) {
        const userDocRef = doc(db, "Users", currentUser.uid);

        if (summary !== undefined) {
            // Update Firestore
            await updateDoc(userDocRef, {
                summary: summary !== null ? summary : ""
            });
            // Update current Firestore User
            setCurrentFirestoreUser(prevUser => ({
                ...prevUser,
                summary: summary !== null ? summary : "",
            }));
        }
    }

    async function updateRecentlyViewed(val) {
        const userDocRef = doc(db, "Users", currentUser.uid);
        const recentlyViewed = (await getDoc(userDocRef));
        const recentlyViewedData = recentlyViewed.data().recently_viewed || [];
        // recentlyViewedData.sort(function(a, b){return b - a})

        let value = parseInt(val);
        if (recentlyViewedData.includes(value) == false && recentlyViewedData.length >= 5) {
            recentlyViewedData.shift();
            recentlyViewedData.push(value);
        } else if (recentlyViewedData.includes(value) == false) {
            recentlyViewedData.push(value);
        }

        if (val !== undefined) {
            await updateDoc(userDocRef, {
                recently_viewed: recentlyViewedData ? recentlyViewedData : ""
            });

            setCurrentFirestoreUser(prevUser => ({
                ...prevUser,
                recently_viewed: recentlyViewedData ? recentlyViewedData : ""
            }));
        }
    }

    async function getProjects() {
        const q = query(collection(db, "Projects"), orderBy('id', 'desc'));
        const querySnapshot = await getDocs(q);
        const projectsList = querySnapshot.docs.map(doc => ({ ...doc.data(), docId: doc.id }));
        setProjects(projectsList);
    }

    async function getRecentlyViewedProjects() {
        // Return the projects if the project id is in the User's recently_viewed array

        const userDocRef = doc(db, "Users", currentUser.uid);
        const recentlyViewedIds = (await getDoc(userDocRef)).data().recently_viewed || [];

        if (recentlyViewedIds.length === 0) {
            return [];
        }

        const q = query(collection(db, "Projects"), where('id', 'in', recentlyViewedIds), orderBy('id', 'desc'));
        const querySnapshot = await getDocs(q);
        const recentlyViewedProjects = querySnapshot.docs.map(doc => ({ ...doc.data(), docId: doc.id }));
        return recentlyViewedProjects;
    }

    async function addProject(project) {
        const projectId = uuidv4();
        await setDoc(doc(db, "Projects", projectId), project);
        setProject(project);
        setProjects(prevProjects => [project, ...prevProjects]);
        setProjectSubmitState({ status: true, action: "added", project: project.header });
    }

    async function updateProject(updatedProject) {
        const q = query(collection(db, "Projects"), where("id", "==", updatedProject.id));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const docRef = querySnapshot.docs[0].ref;
            await updateDoc(docRef, updatedProject);
            setProjectSubmitState({ status: true, action: "updated", project: project.header });
        } else {
            console.error(`Project with id ${updatedProject.id} not found.`);
        }
    }

    async function deleteProject(projectId) {
        const q = query(collection(db, "Projects"), where("id", "==", projectId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const docRef = querySnapshot.docs[0].ref;
            await deleteDoc(docRef);
            setProjects(prevProjects => prevProjects.filter(project => project.id !== projectId));
            setProjectSubmitState({ status: true, action: "deleted", project: project.header });
        } else {
            console.error(`Project with id ${projectId} not found.`);
        }
    }

    async function getUsers() {
        const q = query(collection(db, "Users"), orderBy('role', 'asc'));
        const querySnapshot = await getDocs(q);
        const usersList = querySnapshot.docs.map(doc => doc.data());
        setUsers(usersList);
    }

    function resetProjectSubmitState() {
        setProjectSubmitState({ status: false, action: false, project: false });
    }

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
        updateRecentlyViewed,
        // Projects
        project,
        setProject,
        addProject,
        updateProject,
        deleteProject,
        projects,
        setProjects,
        getProjects,
        getRecentlyViewedProjects,
        // Project Submit Flag
        projectSubmitState,
        setProjectSubmitState,
        resetProjectSubmitState,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
