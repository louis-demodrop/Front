import { useContext } from "react"
import './index.css'


import { FormInputContext } from '../../molecules/FormInput'

export const TextInput = () => {
    const { text, setText } = useContext(FormInputContext)
    
    const handler = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }

    return (
        <input type="text" onInput={handler} value={text}></input>
    )
}
