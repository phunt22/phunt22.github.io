import React from 'react'
import NavBar from '../components/NavBar'
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import '../styles/home.css'

const ME = require('../assets/images/Me2.png')
const resume = require('../assets/images/Resumes/PWH_Resume_7.24.pdf')

export default function Home() {
    return (
        <div className="App">
            <NavBar />
            <div className='upper-container'
                style={{ display: 'flex', flexDirection: 'row', }}
            >
                <img src={ME} alt='hi' style={{ width: 200, height: 200, objectFit: 'cover', borderRadius: 4 }} />
                <div className='resume-list' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', }}>
                    <h1 style={{ marginBottom: 0 }}>Will Hunt</h1>
                    <ul style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', marginTop: 0 }}>
                        <li><a href={resume}>Resume</a></li>
                        <li><a rel="noopener noreferrer" href="https://www.linkedin.com/in/william-hunt-7895a3212/">LinkedIn</a>
                        </li>
                        <li><a rel="noopener noreferrer" href="mailto:pw.hunt11@gmail.com">pw.hunt11@gmail.com</a></li>
                    </ul>
                </div>
            </div>

            <div className='text-container' style
                ={{ marginTop: '20px' }}>


                <p style={{ width: '100%', textAlign: 'left' }}>Hi! I'm a student at the University of Washington, majoring in Computer Science and minoring in Business, set to graduate in spring 2026. I am currently looking for software engineering intern roles for Summer 2025! </p>
                <p style={{ textAlign: 'left' }}>Right now, I am...</p>



                <ul className='activities-container'>
                    <li>
                        President of the Bubble Bash Guild, which benefits <a target="_blank" rel="noopener noreferrer"
                            href="https://www.seattlechildrens.org/clinics/stanley-stamm-summer-camp/">Stanley Stamm Camp
                            Camp</a>. In my 2nd year, I want to raise $75,000, improve our software stack, secure corporate sponsors, and ensure more stability year after year.
                    </li>
                    <li>
                        Working with REV––a local startup––to maintain their mobile app which I created.
                    </li>
                    {/* <li>
                        Working on a research paper regarding the effectiveness of improving patient experience by volunteers having conversations with liver and kidney transplant patients at UW Medicine in Montlake.
                    </li> */}
                    <li>
                        A full time student at UW over the summer

                    </li>
                    <li>
                        Training for the 2025 Boston Marathon

                        (<a href='https://www.strava.com/athletes/42523780' target="_blank" rel="noopener noreferrer">Strava here!</a>)

                    </li>
                </ul>
            </div>
        </div>
    )
}

{/* <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a> */}
