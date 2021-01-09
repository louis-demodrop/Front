import { useAuthRedirection } from '../../../hooks/useAuthRedirection'
import { SignInTemplate } from '../../templates/'

export const SignInPage = () => {
    useAuthRedirection()
    return (<SignInTemplate></SignInTemplate>)
}