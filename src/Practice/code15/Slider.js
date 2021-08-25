import React, { useEffect, useState } from 'react'
import first from './images/first.jpg'
import second from './images/second.jpg'
import third from './images/third.jpg'
import fourth from './images/fourth.jpeg'
import fifth from './images/fifth.jpeg'
import sixth from './images/sixth.png'


const imgData=[
    {
        id:1,
        banner:first
    },
    {
        id:2,
        banner:second
    },
    {
        id:3,
        banner:third
    },
    {
        id:4,
        banner:fourth
    },
    {
        id:5,
        banner:fifth
    },
    {
        id:6,
        banner:sixth
    },
]

function Slider() {
    const styles={
        banner:{
            width:'700px',
            height:'200px',
            objectFit:'cover',
        },
        main:{
            display:'flex'
        }
    }
    const [value, setValue]= useState(0)
    const finalValue = imgData.length -1 
    const imgSliderPre=()=>{
        if(value !== 0){
            setValue(value - 1)
        }else{
            setValue(finalValue)
        }
    }
    const imgSliderNext=()=>{
        if(value !== finalValue){
            setValue(value + 1)
        }else{
            setValue(0)
        }
    }
    useEffect(()=>{
        const interval = setInterval(imgSliderNext, 3000)
        return ()=>{
            clearInterval(interval)
        }
    },[imgSliderNext])
    const {banner} = imgData[value]
    return (
        <div style={styles.main}>
            <button onClick={imgSliderPre}>previous</button>
            <img src={banner} alt='' style={styles.banner}/>
            <button onClick={imgSliderNext}>next</button>
        </div>
    )
}

export default Slider
