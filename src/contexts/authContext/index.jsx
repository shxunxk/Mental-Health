import { auth } from "../../firebase/firebase";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    const authContextValue = useContext(AuthContext);
    console.log("AuthContext value:", authContextValue);
    return authContextValue;
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [userLoggedIn, setUserLoggedIn] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, initializeUser)
        return unsubscribe
    },[])

    async function initializeUser(user){
        if(user){
            setCurrentUser({ ...user })
            setUserLoggedIn(true)
        }else{
            setCurrentUser(null)
            setUserLoggedIn(false)
        }
        setLoading(false)
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading
    }

    console.log("AuthContext value:", value);

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}