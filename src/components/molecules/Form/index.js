import { Label, Button } from '../../atoms';

export const Form = ({ name, onSubmit: submit, label, children, error }) => (
    <form className="form" name={name}>
        <Label>{label}</Label>
        {children}
        <Button onClick={(e) => { e.preventDefault();submit(); }}>submit</Button>
        {error && (
            <div className="form-error">
                <Label>{error}</Label>
            </div>
        )}
    </form>
)
