import { useHistory } from 'react-router-dom'
import './index.css'

import axios from '../../../config/axios'
import { SearchInput, Button } from '../../atoms/'

export const Header = () => {
    const history = useHistory()

    const handleSignOut = async () => {
        const { data: success } = await axios.get('/user/logout')
        if (success) {
            history.push('/signin')
        }
    }

    return (
        <header>
            <h1 role="button" onClick={() => history.push('/')}>DEMODROP</h1>
            <div className="right">
				<SearchInput></SearchInput>
            	<Button onClick={() => history.push('/upload')}>Upload</Button>
            	<Button onClick={handleSignOut}>Sign Out</Button>
        	</div>
		</header>
    )
}
