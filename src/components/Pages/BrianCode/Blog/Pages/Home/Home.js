import React from 'react'
import './Home.css'
import {Button} from '../../Button/Button'
import Video from '../../videos/video-1.mp4'
import Gallery from './Gallery/Gallery'

//<video src={Video} autoPlay loop muted/>

function Home() {
    return (
        <div className='home-main'>
        
            <Gallery/>
            <div className='home-container'>
                <div className='home-title'>Hello Vegan</div>
                <div className='home-tag'>Be a vegan, Proud to be Vegan</div>
                <div className='home-btns'> 
                    <Button buttonStyle='btn--outline' buttonSize='btn--large' path='/sign'>
                        Get Started
                    </Button>
                    <Button buttonStyle='btn--primary' buttonSize='btn--large' path='youtube.com/watch?v=IUN664s7N-c'>
                        Watch Trailer
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home
