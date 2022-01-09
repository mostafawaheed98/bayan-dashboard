import React, {useState, useEffect, useContext, createContext} from 'react';
import {initializeApp} from 'firebase/app';
import {getAuth, sendSignInLinkToEmail, signInWithEmailLink, signOut, onAuthStateChanged, isSignInWithEmailLink} from "firebase/auth";

const app = initializeApp({
    apiKey: process.env.REACT_APP_FB_API,
    authDomain: process.env.REACT_APP_FB_DOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECT,
    storageBucket: process.env.REACT_APP_FB_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_SENDER,
    appID: process.env.REACT_APP_FB_APP,
});

const auth = getAuth(app);

const AuthContext = createContext();

// Hook for child components to get the auth object and re-render when it changes. 
export const useAuth = ()=>{
    return useContext(AuthContext);
}

// Provider hook that creates auth object and handles state
export const AuthPovider = ({children})=>{
    const [user, setUser] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    const sendLoginInLinkToUserEmail = email =>{
        return sendSignInLinkToEmail(auth, email, {
            url: 'http://localhost:3000/confirm',
            handleCodeInApp: true,
        }).then(()=>{
            return true;
        })
    }

    const loginInWithEmailLink = (email, code)=>{
        return signInWithEmailLink(auth, email, code).then(result => {
            console.log(result);
            setUser(result.user);
            return true;
        })
    }

    const logout = ()=>{
        return signOut(auth).then(()=>{
            setUser(null);
        })
    }

    // Subscribe to user on mount
    // Because this sets state in the callback
    // It will case any component that utilizes this hook to re-render with the latest auth object.

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user =>{
            setUser(user);
            setIsAuthenticating(false);
        })

        return ()=> unsubscribe();
    },[]);

    const values = {
        user,
        isAuthenticating,
        sendLoginInLinkToUserEmail,
        loginInWithEmailLink,
        logout
    }

    return <AuthContext.Provider value={values}>
        {!isAuthenticating && children}
    </AuthContext.Provider>
}