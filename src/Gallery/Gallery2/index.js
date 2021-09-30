import React, { useEffect, useState } from 'react'
import {images} from './imageData'
import Button from './Button'
import './styles.css'

function Index() {
    const [tag, setTage]= useState('all')
    const [imgs, setImgs]= useState([])
    useEffect(()=>{
        tag==='all'? setImgs(images): setImgs(images.filter(imagg => imagg.tag===tag))
    },[tag])
    return (
        <div className='gallery-main'>
            <div className='btn-div'>
                <Button handleClick={()=>setTage('all')} buttonStyle='btn--outlineDark' btnActive={tag==='all'?true:false}>ALL</Button>
                <Button handleClick={()=>setTage('free')} buttonStyle='btn--outlineDark' btnActive={tag==='free'?true:false}>FREE</Button>
                <Button handleClick={()=>setTage('new')} buttonStyle='btn--outlineDark' btnActive={tag==='new'?true:false}>NEW</Button>
                <Button handleClick={()=>setTage('pro')} buttonStyle='btn--outlineDark' btnActive={tag==='pro'?true:false}>PRO</Button>
            </div>
            <div className='img-div'>
            {
                imgs.map((img, index) => <img src={img.imgName} alt='' key={index} className='banner'/>)
            }
            </div>
        </div>
    )
}

export default Index
