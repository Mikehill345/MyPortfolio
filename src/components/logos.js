import React from 'react'
import Htmlogo from '../utils/1200px-HTML5_logo_and_wordmark.svg.png'
import pylogo from '../utils/110px-Python-logo-notext.svg.png'
import reactlogo from '../utils/20167174151551942641-128.png'
import csslogo from '../utils/CSS3_logo_and_wordmark.svg.png'
import reduxlogo from '../utils/320px-Redux_Logo.png'
import nodelogo from '../utils/320px-Node.js_logo.svg.png'

const Logos = () => {
    return (
        <div>
            <img src={Htmlogo} alt='HTML logo' className='logos' />
            <img src={pylogo} alt='Python logo' className='logos' />
            <img src={reactlogo} alt='React logo' className='logos' />
            <img src={csslogo} alt='CSS logo' className='logos' />
            <img src={reduxlogo} alt='Redux logo' className='logos' />
            <img src={nodelogo} alt='Node logo' className='logos' />
        </div>
    )
}

export default Logos
