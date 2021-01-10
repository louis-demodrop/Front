import { createContext, useEffect, useReducer, useContext } from "react"

import { MusicReducer, musicActions } from '../reducers/MusicReducer'
import { AuthContext } from "./AuthContext"

export const MusicContext = createContext()

export const MusicContextProvider = ({ children }) => {
    const [music, dispatchMusic] = useReducer(MusicReducer)

    const { auth } = useContext(AuthContext)

    useEffect(() => {
        if (auth && auth.token) {
            /** remplacer par appel axios */

            const userMusicList = ['Donjon House', 'Donjon Rap', 'Donjon Funk']
            dispatchMusic({ type: musicActions.SET_USER_MUSIC_LIST, userMusicList })
        }
    }, [auth])

    useEffect(() => {
        console.log(`MusicContext: music -> ${music}`)
    }, [music])

    return (
        <MusicContext.Provider value={{ music,  dispatchMusic, musicActions }}>{children}</MusicContext.Provider>
    )
}