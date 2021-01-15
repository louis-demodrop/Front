import { createContext, useState } from 'react'
import { Label, TextInput } from '../../atoms/'
import "./index.css"

export const FormInputContext = createContext()

const FormInputContextProvider = ({ children, value }) => {
    const [text, setText] = useState(value || '')
    
    return (
        <FormInputContext.Provider value={{ text, setText }}>{children}</FormInputContext.Provider>
    )
}

export const FormInput = ({ value, label }) => {
    return (
        <span className="formInput">
            <FormInputContextProvider value={value}>
                <Label>{label}</Label>
                <TextInput></TextInput>
            </FormInputContextProvider>
        </span>
    )
}
