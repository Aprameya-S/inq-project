import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { db, auth } from "../../firebase"
import React, { createContext, useState } from 'react'
import { doc, getDoc, setDoc} from "firebase/firestore"

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [userID, setUID] = useState()
    const [userType, setType] = useState()
    const [userName,setName] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState()


    // 1 -> successfull login
    // -10 -> wrong type login attempt
    // -11 -> incorrect credentials
    // -12 -> no such user

    const login = async(email, password, loginType) => {
        const user = await getDoc(doc(db, "users", email))
        if(!user.exists()) return -12
        const {name, type, uid} = user.data()
        if(loginType === type){
            const signInUser = await signInWithEmailAndPassword(auth, email, password)
            if(signInUser.user.uid === uid){
                setIsLoggedIn(true)
                setName(name)
                setType(type)
                setUID(uid)
                return type
            } 
            return -11
        }else{
            return -10
        }
    }

    const CoordSignup = async(email, password, name) => {
        try{
            console.log("signing up......")
            const createUser = await createUserWithEmailAndPassword(auth, email, password)
            const userRef = doc(db, "users", email)
            const userAdd = await setDoc(userRef, {name, email, type:1, uid: createUser.user.uid})
            setName(name)
            setUID(createUser.user.uid)
            setIsLoggedIn(true)
    console.log(userAdd)
    } catch(err){
        return -1
    }
    }


    const logout = async() => {
    }

    return(
        <AuthContext.Provider value={{login, userName, userType, isLoggedIn, CoordSignup}} >
        {children}
        </AuthContext.Provider>
    )

}