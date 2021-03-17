import { useEffect, useState } from 'react'

import axios from '../config/axios'

export const useLoginStatus = () => {
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        async function checkLoginStatus () {
            const { data: isConnected } = await axios.get('/user/login')
            if (isConnected == true) {
                setLogged(true)
            }
        }
        checkLoginStatus()
    }, [])

    return logged
}
