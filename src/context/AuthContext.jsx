import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export function AuthProvider({ children }) {

    const [user,setUser] = useState(null)

    const login = (userData)=>{
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }

    const logout = ()=>{
        setUser(null)
        localStorage.removeItem("user") 
    }
    const isAuthenticated = user !== null;

    return (
        <AuthContext.Provider value={{user, login, logout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext);
}