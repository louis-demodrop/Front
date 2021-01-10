import { useContext } from 'react'

import { MusicContext } from '../../../contexts/MusicContext'
import { FileInput } from '../../atoms/'

export const InputMusicFile = () => {
    const { dispatchMusic, musicActions } = useContext(MusicContext)

    const handleDragOver = (e) => {
        // Prevent default behavior (Prevent file from being opened)
        e.preventDefault()
    }

    const handleDrop = (e) => {
        e.preventDefault()
        if (e.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (let i = 0; i < e.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (e.dataTransfer.items[i].kind === 'file') {
                    let file = e.dataTransfer.items[i].getAsFile()
                    console.log('... file[' + i + '].name = ' + file.name)
                    dispatchMusic({ type: musicActions.SET_FILE_TO_UPLOAD, file })
                }
            }
        } else {
            // Use DataTransfer interface to access the file(s)
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
                console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name)
                dispatchMusic({ type: musicActions.SET_FILE_TO_UPLOAD, file: e.dataTransfer.files[i] })
            }
        }        
    }

    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.files) {
            dispatchMusic({ type: musicActions.SET_FILE_TO_UPLOAD, file: e.target.files[0] })
        }
    }

    return (
        <FileInput onDrop={handleDrop} onChange={handleChange} onDragOver={handleDragOver} multiple={false}></FileInput>
    )
}