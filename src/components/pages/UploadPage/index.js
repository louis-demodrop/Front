import axios from '../../../config/axios'
import { UploadTemplate } from '../../templates/'

export const UploadPage = () => {

    const handleUpload = async (form) => {
        const formData = new FormData()
        formData.append('title', form.title)
        formData.append('audio', form.audio)
        const { data: { success }} = await axios.post('/music/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        if (success) {
            console.log(success)
        }
    }

    return <UploadTemplate handleUpload={handleUpload}></UploadTemplate>
}
