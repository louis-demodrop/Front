import { useHistory } from 'react-router-dom'

import axios from '../../../config/axios'
import { SignInTemplate } from '../../templates/'

export const SignInPage = () => {
    const history = useHistory()

    const handleSignIn = async (form) => {
        const { data: { success } } = await axios.post('/user/login', form)
        if (success) {
            history.push('/')
        }
    }

    return (<SignInTemplate handleSignIn={handleSignIn}></SignInTemplate>)
}
