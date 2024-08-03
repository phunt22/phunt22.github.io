import React from 'react'


export default function AwardCard({ heading, image, alt, description }) {
    return (
        <div style={{ width: 350, height: 350, backgroundColor: 'white', margin: 10, borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <h1 style={{ margin: 0, fontSize: 36, marginTop: 4, maxWidth: '95%', color: 'black' }}>{heading}</h1>
            <div className='image-container' style={{ width: 200, height: 200, borderRadius: 12 }}>
                <img src={image} alt={alt} style={{ color: 'black', borderRadius: 12, width: 200, height: 200, objectFit: 'cover' }} />
            </div>
            <p style={{ fontSize: 20, maxWidth: '95%', color: 'black', textAlign: 'left', marginLeft: 4 }}>{description}</p>
        </div>
    )
}