import React from 'react';
import ProfilePic from "../../public/profile-pic.jpg"

function About() {
    return (
        <div>
            <p className='content is-medium is-size-2'>Musician, Hospitality Associate, Junior Web-Developer</p>
            <img className='profile-pic' src={ProfilePic} alt="Max Blaul" style={{ width: '350px', height: '350px' }}></img>
            <p className='content is-italic mt-4 is-size-4'>My name is Max Blaul. I live just outside of Chicago in the village of Wilmette.  In December, 2019, I graduated from Columbia College Chicago with a BA in Music Business Management. 
            Since July of 2023, I am working as a budtender for the company MedMen at their Morton Grove location. In my personal life I am also a musician, with mastery in guitar, bass, mandolin,  and banjo. I also perform professionally and handle  marketing and social-media in the band Totem Frogs.    
            I recently completed a full-stack web development course with Northwestern University and have a few interesting applications to share in this website.</p>
        </div>
        
    )
}
export default About;