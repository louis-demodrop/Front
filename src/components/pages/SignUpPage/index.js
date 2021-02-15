import axios from '../../../config/axios'
import { useHistory } from 'react-router-dom'
import { SignUpTemplate } from '../../templates/'

export const SignUpPage = () => {

    const handleSignUp = async (form) => {
        const history = useHistory()

        const { data: { result } } = await axios.post('/user/register', form)
        if (result) {
            history.push('/signin')
        }
    }

    return (<SignUpTemplate handleSignUp={handleSignUp}></SignUpTemplate>)
}
