import { useContext } from 'react'
import { MusicContext } from '../../../contexts/MusicContext'
import { MusicCard } from '../../organisms/MusicCard'

export const FeedTemplate = () => {
    const { music } = useContext(MusicContext)

    return (<> { music.userMusicList.map(music => <MusicCard music={music}></MusicCard>) } </>)
}