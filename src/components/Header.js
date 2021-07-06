import React from 'react'
import About from './About'

const Header = () => {
    return (
        <div className='header'>
            <div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div class="logo"><span>MRH</span></div>
            </div>
            <div class="header-content">
                <About />
            </div>
        </div>
    )
}

export default Header
