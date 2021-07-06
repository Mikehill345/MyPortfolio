import React from 'react'
import pic from '../utils/139433672_227299378885346_7756322547934512307_n.jpg'

const About = () => {
    return (
        <div>
            <h1>Michael Hill</h1>
            <div class="about">
                <img src={pic} alt='mike hill' />
                <p className='description'> I am a Full Stack Web Developer with experience building websites and web applications.
                    I specialize in JavaScript and have experience working testing in Jest and Cypress.
                    I get excited and jump at the opportunity to be part of new projects,
                    especially those that drive my passion for helping members of my immediate community. I graduated Lambda coding bootcamp in Febuary 2021 with skills in
                    JavaScript, React, Node.js, SQL, MongoDB using state management systems such as Redux, Recoil and Context API I also have experience building RESTful API's.</p>
            </div>
        </div>
    )
}

export default About
