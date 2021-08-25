import React, { useEffect, useState } from 'react'
import './GalleryCard.css'
import{menuItems} from './GalleryData'
import {Button} from '../../Button/Button'
import {SRLWrapper} from 'simple-react-lightbox'


function GalleryCard() {
    const [category, setCategory]= useState('all')
    const [images, setImages]= useState([])
    useEffect(()=>{
        category === 'all'? setImages(menuItems): setImages(menuItems.filter(img => img.category===category))
    },[category])
    return (
        <div className='gallery-main'>
            <div className='btn-div'>
                <Button buttonStyle='btn--outline' handleClick={()=>setCategory('all')} btnActive={category==='all'?true:false}>All</Button>
                <Button buttonStyle='btn--outline' handleClick={()=>setCategory('fruit')} btnActive={category==='fruit'?true:false}>Fruit</Button>
                <Button buttonStyle='btn--outline' handleClick={()=>setCategory('nuts')} btnActive={category==='nuts'?true:false}>Nuts</Button>
                <Button buttonStyle='btn--outline' handleClick={()=>setCategory('root')} btnActive={category==='root'?true:false}>Root</Button>
                <Button buttonStyle='btn--outline' handleClick={()=>setCategory('kaya')} btnActive={category==='kaya'?true:false}>Kaya</Button>
                <Button buttonStyle='btn--outline' handleClick={()=>setCategory('leaves')} btnActive={category==='leaves'?true:false}>Leaves</Button>
                <Button buttonStyle='btn--outline' handleClick={()=>setCategory('flower')} btnActive={category==='flower'?true:false}>Flower</Button>
                <Button buttonStyle='btn--outline' handleClick={()=>setCategory('stem')} btnActive={category==='stem'?true:false}>Stem</Button>
            </div>
            <SRLWrapper>
                <div className='gallery-menu'>
                    {
                        images.map(img => <img src={img.image} alt='' className='img-sub' />)
                    }
                </div>
            </SRLWrapper>
        </div>
    )
}

export default GalleryCard
