import React from 'react'
import github from '../utils/969021121530099614-128.png'
import linkedin from '../utils/16090541531530099327-128.png'
import email from '../utils/15743770351574338605-128.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='email'>
                <h2>Contact me</h2>
                <img src={email} alt='gmail icon' className='icons' />
                <h2>mikehill.webdeveloper@gmail.com</h2>
            </div>
            <div className="icon-section">
            <a className="icons" href='https://www.linkedin.com/in/mikehill345/'>
                <img src={github} href='https://github.com/Mikehill345' alt='github icon' className="icons" />
                </a>
                <a className="icons" href='https://www.linkedin.com/in/mikehill345/'>
                <img src={linkedin} alt='linkedin icon' className="icons" />
                </a>
            </div>
        </div>
    )
}

export default Footer
