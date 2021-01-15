import { useContext } from "react"

import './index.css' 

import { MusicContext } from '../../../contexts/MusicContext'

export const SearchInput = () => {
    const { music, dispatchMusic, musicActions } = useContext(MusicContext)
    
    const handler = (e) => {
        e.preventDefault()
        dispatchMusic({ type: musicActions.SET_SEARCH, search: e.target.value })
    }

    return (
        <input type="search" onInput={handler} value={music ? music.search : ''}></input>
    )
}
