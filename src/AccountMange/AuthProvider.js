import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

import useToken from '../SystemSecret/useToken';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
 const [user, setUser]=useState(null)
 const [loading, setLoading] = useState(true)
 useToken(user)
const signUp = (email, password)=>{
 setLoading(true)
 return createUserWithEmailAndPassword(auth, email, password)
}
const login =(email, password)=>{
 setLoading(true)
 return signInWithEmailAndPassword(auth, email, password)
}
const googleLogin = (provider)=>{
 setLoading(true)
 return signInWithPopup(auth, provider)
}
const updateUser = (profile)=>{
 return updateProfile(auth.currentUser, profile)
}
const logOut = () =>{
 setLoading(true)
 return signOut(auth)
}
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, currentUser =>{
  console.log(currentUser)
  setUser(currentUser)
  
  setLoading(false)

 })
 return ()=>unsubscribe();
},[])
 const authInfo = {
  user,
  loading,
  signUp,
  login,
  googleLogin,
  logOut,
  updateUser
 }
 return (
  <AuthContext.Provider value={authInfo}>
  {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;