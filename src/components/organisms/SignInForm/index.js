import { useContext } from "react"
import { useHistory } from "react-router-dom"

import { AuthContext } from "../../../contexts/AuthContext"
import { FormInput } from "../../molecules/FormInput"
import { Button } from "../../atoms"

export const SignInForm = () => {
    const { dispatchAuth, authActions } = useContext(AuthContext)
    const { SET_TOKEN } = authActions
    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault()
        
        /** Axios call */
        
        dispatchAuth({ type: SET_TOKEN })
        history.push('/')
    }

    return (
        <span className="form">
            <FormInput label="Username"></FormInput>
            <FormInput label="Password"></FormInput>
            <Button text="Sign In" onClick={handleClick}></Button>
        </span>
    )
}
