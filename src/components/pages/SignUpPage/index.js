import { useHistory } from 'react-router-dom'

import axios from '../../../config/axios'
import { SignUpTemplate } from '../../templates/'

export const SignUpPage = () => {
    const history = useHistory()

    const handleSignUp = async (form) => {
        const { data: { result } } = await axios.post('/user/register', form)
        if (result) {
            history.push('/signin')
        }
    }

    return (<SignUpTemplate handleSignUp={handleSignUp}></SignUpTemplate>)
}
