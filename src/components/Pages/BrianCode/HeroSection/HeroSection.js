import React from 'react'
import {Button} from './Button'
import Video from './video.mp4'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={Video} autoPlay loop muted/>
                    <div className='title-name'>Welcome To My World</div>
                    <div className='tag-name'>Be a vegan, proud to be Vegan</div>
                <div className='btns'>
                    <Button buttonStyle='btn--outline'>Get Started</Button>
                    <Button>Watch Trailer <i class="far fa-play-circle"></i></Button>
                </div>
        </div>
    )
}

export default HeroSection
