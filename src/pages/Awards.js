import React from 'react'
import NavBar from '../components/NavBar'
import AwardCard from '../components/AwardCard'


const eugenePic = require('../assets/images/EugenePic.jpg')

const gamedayPic = require('../assets/images/Ws/Gameday.jpeg')
const larches = require('../assets/images/Ws/EnchantsLarches.jpeg')
const ragnar = require('../assets/images/Ws/Ragnar.JPG')
const cseed = require('../assets/images/Ws/Buildspace.png')
const bb = require('../assets/images/Ws/bubblebashing.jpeg')
const ifc = require('../assets/images/Ws/ifcphilooty.jpeg')
const stamm24 = require('../assets/images/Ws/Branch.png')
const adpoch = require('../assets/images/Ws/ADPoch.JPG')


const awards = [{
    heading: "Bubble Bash '24",
    image: bb,
    alt: 'Me at cseed buildspace',
    description: "Organized and orchestrated an auction that raised $65,000  as President of the Bubble Bash Guild"
}, {
    heading: 'Cseed Buildspace',
    image: cseed,
    alt: 'Me at cseed buildspace',
    description: "Recognized as a top project at the end of cseed's first ever UW cohort!"
}, {
    heading: 'A. D. Pochter Award',
    image: adpoch,
    alt: 'My friends receiving the Andrew D. Pochter award for Philanthropy',
    description: 'Recognized by Alpha Delta Phi International for excellence and innovation in philanthropy'
}, {
    heading: "Stamm Camp '24",
    image: stamm24,
    alt: 'Me as Branch from Trolls',
    description: 'Cabin volunteer responsible for 6 campers 24 hours a day. Was Branch from Trolls in the camp skit (pictured)'
}, {
    heading: 'Eugene Marathon',
    image: eugenePic,
    alt: 'Me running the Eugene Marathon',
    description: 'Ran a 2:41 (6:09/mi) for my first Marathon, taking 51st overall!'
},
{
    heading: "IFC Philanthropy",
    image: ifc,
    alt: 'Me at cseed buildspace',
    description: "Recognized by UW's IFC for Excellence in Philanthropy. "
}, {
    heading: 'Ragnar',
    image: ragnar,
    alt: 'My ragnar team',
    description: 'Team finished 2nd in 200mi NW Passage Relay. I ran 3 legs, averaging 5:39/mi for 24.1 miles'
},
{
    heading: 'College Gameday',
    image: gamedayPic,
    alt: 'Me at college gameday',
    description: 'Camped in Red Square overnight for College Gameday vs. Oregon!'
}, {
    heading: 'Enchantments',
    image: larches,
    alt: 'Enchantments Larches',
    description: 'Through hiked the Enchantments during the larches, 10/10'
},
]

export default function Awards() {


    return (
        <div className='App'>
            <NavBar />
            <div className='bottom-container' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
                {awards.map((item) => (
                    <AwardCard
                        heading={item.heading}
                        image={item.image}
                        alt={item.alt}
                        description={item.description}

                    />))}
            </div>


        </div>
    )
}
