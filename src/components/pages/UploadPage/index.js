import { Header } from '../../organisms/Header'
import { UploadTemplate } from '../../templates/'
import { useAuthRedirection } from '../../../hooks/useAuthRedirection'

export const UploadPage = () => {
    useAuthRedirection()

    return (<>
        <Header></Header>
        <UploadTemplate></UploadTemplate>
    </>)
}