import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

export const useAuthRedirection = () => {
    const { auth } = useContext(AuthContext)
    const history = useHistory()

    useEffect(() => {
        switch (auth && auth.token) {
            case undefined:
                history.push("/signin")
                break
            default:
                return
        }
    }, [auth, history])
} 