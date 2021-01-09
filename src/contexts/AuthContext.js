import { createContext, useEffect, useReducer } from "react"

import { AuthReducer, authActions } from '../reducers/AuthReducer'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [auth, dispatchAuth] = useReducer(AuthReducer)

    useEffect(() => {
        console.log(auth)
    }, [auth])

    return (
        <AuthContext.Provider value={{ auth,  dispatchAuth, authActions }}>{children}</AuthContext.Provider>
    )
}