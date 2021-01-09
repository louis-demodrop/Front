import { useContext } from "react"

import { AuthContext } from "../../../contexts/AuthContext"
import { FormInput } from "../../molecules/FormInput"
import { Button } from "../../atoms"

export const SignInForm = () => {
    const { dispatchAuth, authActions } = useContext(AuthContext)
    const { SET_TOKEN } = authActions

    const handleClick = (e) => {
        e.preventDefault()
        
        /** Axios call */
        
        dispatchAuth({ type: SET_TOKEN })
    }

    return (
        <span>
            <FormInput label="Username"></FormInput>
            <FormInput label="Password"></FormInput>
            <Button text="Sign In" onClick={handleClick}></Button>
        </span>
    )
}
