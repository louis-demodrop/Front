import { useContext } from "react"

import { AuthContext } from "../../../contexts/AuthContext"
import { FormInput } from "../../molecules/FormInput"
import { Button } from "../../atoms"

export const SignUpForm = () => {
    const { dispatchAuth, authActions } = useContext(AuthContext)
    const { SET_TOKEN } = authActions

    const handleClick = (e) => {
        e.preventDefault()
        
        /** Axios call register, send back jwt token */
        
        dispatchAuth({ type: SET_TOKEN })
    }

    return (
        <span className="form">
            <FormInput label="Username"></FormInput>
            <FormInput label="Password"></FormInput>
            <FormInput label="Confirm password"></FormInput>
            <Button text="Sign In" onClick={handleClick}></Button>
        </span>
    )
}
