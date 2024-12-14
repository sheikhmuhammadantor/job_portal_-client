import { createContext } from "react"

export const AuthContext = createContext({});

function AuthProvider({ children }) {


    const authInfo = {
        user: "Muhammad",
        age: 21
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
