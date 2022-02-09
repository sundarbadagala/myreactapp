import { useEffect, useState } from 'react'
import './styles.css'

export default function Menubar ({homeScroll, galleryScroll, profileScroll, aboutScroll  }){
    const [scroll, setScroll]= useState(false)
    const controlMenubar=()=>{
        if(window.scrollY > 150){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', controlMenubar)

        return ()=>{
            window.removeEventListener('scroll', controlMenubar)
        }
    },[])
    return(
        <div className={`menu ${scroll && `menu_scroll`}`}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end', height:'100%'}}>
                <button onClick={homeScroll} className='button'>Home</button>
                <button onClick={galleryScroll} className='button'>Gallery</button>
                <button onClick={profileScroll} className='button'>Profile</button>
                <button onClick={aboutScroll} className='button'>About</button>
            </div>
        </div>
    )
}