import { Button } from './Button'
import React from 'react'
import Video from '../videos/video-2.mp4'
import './HeroSection.css'


function HeroSection() {
    return (
        <React.Fragment>
            <div className='hero-container'>
                <video src={Video} autoPlay loop muted/>
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you Waiting</p>
                <div className='hero-btns'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        GET STARTED
                    </Button>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        WATCH TRAILER <i className='far fa-play-circle'/>
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroSection
