import { createContext, useContext, useEffect, useState } from "react";



export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setisAuthenticated] = useState(undefined);

    useEffect(() => {
        //onAuthStateChange
        //setTimeout(()=>{
            setisAuthenticated(false);
       // },3000)
    }, [])

    const login = async (email, password) => {
        try {
            
        } catch (e) {
            
        }
    }
    const logout = async (email, password) => {
        try {
            
        } catch (e) {
            
        }
    }
    const register = async (email, password, username , profileUrl) => {
        try {
            
        } catch (e) {
            
        }
    }

    return (
        <AuthContext.Provider value = {{user, isAuthenticated, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const value = useContext(AuthContext);

    if(!value) {
        throw new Error('useAuth must be wrapped inside AuthContextProvider');
    }
    return value;
}