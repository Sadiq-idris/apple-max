import React, { useContext, useState, useEffect } from "react"
import { createUserWithEmailAndPassword, updateEmail, updatePassword,
     signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth"
import { auth, db, timeStamp } from "../../firebase"
import { addDoc, collection, getDocs } from "firebase/firestore"

const AuthContext = React.createContext()


export const AuthProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState()
    const [error, setError] = useState('')
    const [ message, setMessage ] = useState('')

    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    const upEmail = (email)=>{
        return updateEmail(currentUser, email)
    }

    const upPassword = (password)=>{
        return updatePassword(currentUser, password)
    }

    // adding data to firebase store
    const addData = async (data)=>{
        const created_at = timeStamp()
        return await addDoc(collection(db, "images"),{data, created_at,})
    }

    // getting data from firebase store
    const getData =  (nameCol)=>{

        return getDocs(collection(db, nameCol))
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setCurrentUser(user)
            }else{
                console.log("User not login")
            }
        })
    }, [])

    const value = {
        signUp,
        login,
        logOut,
        currentUser,
        setCurrentUser,
        error,
        setError,
        message, 
        setMessage,
        resetPassword,
        upEmail,
        upPassword,
        addData,
        getData
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}


export const UserAuth = ()=>{

    return useContext(AuthContext)
}