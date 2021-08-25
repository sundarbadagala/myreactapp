import React from 'react'
import {Images} from './imageData'
import './Gallery.css'
import {SRLWrapper} from 'simple-react-lightbox'

function Gallery() {
    return (
        <SRLWrapper>
            <div className='gallery-main'>
                {
                    Images.map(img=> <img src={img} alt=''className='images'/>)
                }
            </div>
        </SRLWrapper>
    )
}

export default Gallery
