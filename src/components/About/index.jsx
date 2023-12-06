import React from 'react';
import ProfilePic from "../../public/profile-pic.jpg"

function About() {
    return (
        <div>
            <p className='content is-medium'>Musician, Hospitality Associate, Junior Web-Developer</p>
            <img className='profile-pic' src={ProfilePic} alt="Max Blaul" style={{ width: '350px', height: '350px' }}></img>
            <p className='content is-italic mt-4'>My name is Max Blaul</p>
        </div>
        
    )
}
export default About;