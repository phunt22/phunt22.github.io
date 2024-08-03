import React from 'react'
import '../App.css'
import NavBar from '../components/NavBar'
import ProjectCard from '../components/ProjectCard'


const shoutVideo = <iframe class="iframe-style"
    src="https://www.youtube.com/embed/74wTpJIU6AA?si=CBvxLc6S_Iv4KXga"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>


const shoutDescriptionHTML = <div>
    <p style={{ textAlign: 'left' }}>Shout is a room-based anonymous reporting web app that I developed with the goal of
        improving
        safety and responsiveness in UW's Greek System. Mobile friendly and can be easily installed with a QR Code to the desired room</p>
    < a target="_blank"
        rel="noopener noreferrer" class="project-link" href="https://anon-reporting.web.app/" > Try it out
        here!</a >
</div>

export default function Projects() {
    return (
        <div className='App'>
            <NavBar />
            <div style={{ marginTop: 0, width: '90%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>


                <p>Here are some projects I've made:</p>
                <ProjectCard
                    title={'Shout'}
                    subtitle={'Anonymous reporting web app'}
                    description={shoutDescriptionHTML}
                    video={shoutVideo}
                />
                <ProjectCard
                    title={'Meal Maker'}
                    subtitle={'Meal recommendation app'}
                    description={<p>Meal Maker is a mobile app that uses OpenAI's API to generate meal idea based on a user's
                        on-hand
                        ingredients, dietary restrictions,
                        and inputted preferences. Was made for an AccessHacks Hackathon and never deployed, but learned a lot about mobile development with React Native!</p>}
                    video={<iframe width="336" height="189"
                        src="https://www.youtube.com/embed/ZBi613l0N6w?si=qQRlSQub8Q-3Bs76"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>}
                />

                <p className='classes-list'> Relevant UW coursework includes: Machine Learning, Data Structures, Software Design, Foundations of Computing (stats, probability, etc) I & II, Hardware/software interface, Intro to Data Mangement, Intro Series (OOP), Matrix Algebra, Calculus</p>
            </div>
        </div>
    )
}
