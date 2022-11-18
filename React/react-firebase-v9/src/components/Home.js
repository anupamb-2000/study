import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const handleLogout = () => {
        navigate('/login')
        sessionStorage.removeItem('Auth Token')
    }

    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/home')
        }

        if(!authToken) {
            navigate('/login')
        }
    }, [navigate])

    return (
        <Button variant='contained' onClick={handleLogout}>Log out</Button>
    )
}