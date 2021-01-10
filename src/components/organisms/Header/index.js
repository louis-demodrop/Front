import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../../../contexts/AuthContext'
import { SearchInput, Button } from '../../atoms/'

export const Header = () => {
    const history = useHistory()
    const { dispatchAuth } = useContext(AuthContext)

    const handleSignOut = () => {
        dispatchAuth({ type: 'UNSET_TOKEN' })
    }

    return (
        <header>
            <h1>DEMODROP</h1>
            <SearchInput></SearchInput>
            <Button text="Upload" onClick={() => history.push('/upload')}></Button>
            <Button text="Sign Out" onClick={handleSignOut}></Button>
        </header>
    )
}