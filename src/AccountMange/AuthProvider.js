import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
 const [user, setUser]=useState(null)
const signUp = (email, password)=>{
 return createUserWithEmailAndPassword(auth, email, password)
}
const login =(email, password)=>{
 return signInWithEmailAndPassword(auth, email, password)
}
const googleLogin = (provider)=>{
 return signInWithPopup(auth, provider)
}
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, currentUser =>{
  console.log(currentUser)
  setUser(currentUser)
 })
 return ()=>unsubscribe();
},[])
 const authInfo = {
  user,
  signUp,
  login,
  googleLogin
 }
 return (
  <AuthContext.Provider value={authInfo}>
  {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;