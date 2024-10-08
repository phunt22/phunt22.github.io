import React from 'react'
import NavBar from '../components/NavBar'
import ExperienceCard from '../components/ExperienceCard'
import WorkExpCard from '../components/ExperienceCard'
import '../App.css'


const MBwOwen = require('../assets/images/MBwOwen.JPG')
const Nordstrom = require('../assets/images/NordstromNLogoBlack.png')
const REVRLogo = require('../assets/images/REVRLogo.jpeg')
const HaulingImage = require('../assets/images/HaulingStockImage.webp')
const BBLogo = require('../assets/images/Bubble Bash Logo.png')




export default function Experience() {

    const revDescription = "Most recently, I have worked for REV developing their mobile app. It has been a great experience in which I have learned so much about software development (especially in React) and business operation. With REV's target market being my peers, it was easy to understand what consumer needs and wants were and implement those changes into the mobile app. Now, over 50% of REV's sales are through this app as the company continues to succeed."

    const bubbleBashDescrption = "The Bubble Bash Guild is a guild of Seattle Children's Hospital (SCH) ran by undergraduates at UW. All money raied goes directly to Stanley Stamm Camp––a SCH program ensuring that kids can go to summer camp regardless of their medical needs or ability to pay. During my first year as President, we have raised $65,000, started a volunteering program in the hospital playroom, made some great relations with local businesses and SCH representatives, and dramatically improved marketing campaigns to create a more sustainable future for the guild. Over the past year, I have personally contributed nearly 200 volunteering hours directly with Seattle Children's Hospital (and the camp itself), which has reinforced my motivation to keep working hard to support Stamm Camp!"

    const nordstromDecsription = "In my time at Nordstrom, I worked in fulfillment for online orders. This was a great experience where I learned a lot about quality assurance, customer service, and how large businesses operate. In my one summer there, I exceeded company standards"

    const mossBayDescription = "This job was incredibly fast-paced as well as mentally and physically demanding. Through a lot of hard work, I mastered all company roles and even went above and beyond to be a point person for key projects such as equipment (kayak and paddleboard) repair and installation of critical safety equipment after rashes of theft (saving potentially tens of thousands of dollars). Also learned a lot on the fly, such as learning how to sail in less than two weeks, efficiently serving hundreds of customers a day (each with different needs), creating new camp games, and more."

    const selfEmpDescription = "During the COVID pandemic, I made money by offering to deliver items to Goodwill for a $30 fee. I found customers through platforms like Facebook and Nextdoor, as well as referrals. Over that summer, I delivered tens of thousands worth of donations to Goodwill.";



    const expCards = [
        {
            title: "REV Delivery",
            subtitle: "Software Engineer (Mobile)",
            description: revDescription,
            photo: REVRLogo
        },
        {
            title: "Bubble Bash Guild",
            subtitle: "President",
            description: bubbleBashDescrption,
            photo: BBLogo
        },
        {
            title: "Moss Bay",
            subtitle: "Rentals Staff, Camp Counselor",
            description: mossBayDescription,
            photo: MBwOwen
        },
        {
            title: "Nordstrom",
            subtitle: "Web Fulfillment",
            description: nordstromDecsription,
            photo: Nordstrom
        },
        {
            title: "Self Employed",
            subtitle: "Hauling",
            description: selfEmpDescription,
            photo: HaulingImage
        },
    ];

    return (
        <div className='App'>
            <NavBar />
            {/* <ExperienceDescription />
            <ExperienceNavBar /> */}

            <div>
                {expCards.map((item, index) => (
                    <WorkExpCard
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        photo={item.photo}
                    />
                ))}
            </div>
        </div>
    )
}