import { Label } from '../../atoms/'

export const FormInput = ({ label, children }) => (
    <span>
        <Label>{label}</Label>
        {children}
    </span>
)
