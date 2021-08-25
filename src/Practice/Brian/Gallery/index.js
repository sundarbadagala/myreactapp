import React, { useState } from 'react'
import './styles.css'
import {Images} from './Images'

function Index() {
    const [mainImg, setMainImg]= useState(Images[0])
    return (
        <div className='gallery'>
            <img src={mainImg} alt='Main-img' className='img-main'/>
            <div className='img-list'>
                {
                    Images.map((img, index) => 
                        <img 
                            className='img-sub' 
                            src={img} 
                            alt='Menu' 
                            key={index}
                            onClick={()=>setMainImg(img)}
                            style={{border: img=== mainImg? '3px solid black':''}}
                        />)
                }
            </div>
        </div>
    )
}

export default Index
