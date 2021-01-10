import { useContext } from 'react'

import { MusicContext } from '../../../contexts/MusicContext'
import { FormInput } from "../../molecules/FormInput"
import { InputMusicFile } from "../../molecules/InputMusicFile"
import { Button } from "../../atoms"

export const UploadForm = () => {
    const { music, dispatchMusic, musicActions } = useContext(MusicContext)
    
    const handleUpload = (e) => {
        e.preventDefault()
        console.log(`uploading ${music.fileToUpload.name}`)
        const formData = new FormData()
        if (music.fileToUpload) {
            const file = music.fileToUpload
            formData.append(file.name, file)
            dispatchMusic({ type: musicActions.ADD_USER_MUSIC, musicName: file.name })
        }

        /* try {
            const res = await axios.post('/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              onUploadProgress: progressEvent => {
                setUploadPercentage(
                  parseInt(
                    Math.round((progressEvent.loaded * 100) / progressEvent.total)
                  )
                );
      
                // Clear percentage
                setTimeout(() => setUploadPercentage(0), 10000)
              }
            });
      
            const { fileName, filePath } = res.data;
      
            setUploadedFile({ fileName, filePath });
      
            setMessage('File Uploaded');
          } catch (err) {
            if (err.response.status === 500) {
              setMessage('There was a problem with the server');
            } else {
              setMessage(err.response.data.msg);
            }
          } */        
    }

    return (
        <span>
            <FormInput label="Sound name"></FormInput>
            <InputMusicFile></InputMusicFile>
            <Button text="Upload" onClick={handleUpload} disabled={music ? !music.fileToUpload : true}></Button>
        </span>
    )
}
