import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // localStorage.clear();

    const [userData, setUserData] = useState();

    useEffect(() => {
        setLocalStorage();
        const {employees, admin} = getLocalStorage();
        setUserData({employees, admin})
    },[])

  return (
    <div>
        <AuthContext.Provider value={{userData, setUserData}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;