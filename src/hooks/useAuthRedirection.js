import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

export const useAuthRedirection = () => {
    const { auth } = useContext(AuthContext)
    const history = useHistory()

    useEffect(() => {
        if (auth) {
            switch (auth.token) {
                case true:
                    history.push("/")
                    break
                default:
                    history.push("/signin")
            }
        }
    }, [auth, history])
} 