import React, { createContext, useState } from 'react';
import app from '../firebase.config';
import {getAuth} from 'firebase/auth';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
 const [user, setUser]=useState(null)

 const authInfo = {
  user,
 }
 return (
  <AuthContext.Provider>

  </AuthContext.Provider>
 );
};

export default AuthProvider;