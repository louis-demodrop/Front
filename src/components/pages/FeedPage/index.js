import { Header } from '../../organisms/Header'
import { FeedTemplate } from '../../templates/'
import { useAuthRedirection } from '../../../hooks/useAuthRedirection'

export const FeedPage = () => {
    useAuthRedirection()

    return (<>
        <Header></Header>
        <FeedTemplate></FeedTemplate>
    </>)
}