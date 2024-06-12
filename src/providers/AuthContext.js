// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../api/firebase';
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../api/firebase";


const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) { // Corrected children typo
    const [currentUser, setCurrentUser] = useState(); 
    const [currentFirestoreUser, setCurrentFirestoreUser] = useState({});

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
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateProfile,
        updateSummary
      }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
