import React from 'react'
import { useNavigate } from 'react-router-dom'

const DOOR = require('../assets/images/DOOR.webp')

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '90%', marginLeft: 20 }}>
            <p>
                ... I think you're lost
            </p>
            <p>
                Here's the door to get back
            </p>

            <div >
                <img src={DOOR} alt='door' style={{ cursor: 'pointer', width: '100%' }}
                    onClick={() => navigate('/')} />
            </div>





        </div >
    )
}
