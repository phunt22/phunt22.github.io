import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';



import '../styles/nav.css'



export default function NavBar() {
    const navigate = useNavigate();

    return (
        <header className='nav-container'>


            <button className='nav-cat-container'
                onClick={() => navigate('/')} style={{ marginBottom: '4px' }}>
                <FontAwesomeIcon icon={faHome} className='nav-text' />
            </button>

            <button className='nav-cat-container'
                onClick={() => navigate('/experience/work')}>
                <p className='nav-text'
                >Work</p>
            </button>

            <button className='nav-cat-container'
                onClick={() => navigate('/experience/projects')}>
                <p className='nav-text'
                >Projects</p>
            </button>

            <button className='nav-cat-container'
                onClick={() => navigate('/awards')}>
                <p className='nav-text'>Recent Ws</p>
            </button>


        </header>
    )
}