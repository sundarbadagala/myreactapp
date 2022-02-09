import Navbar from './Navbar'
import Menubar from './Menubar'
import './styles.css'
import { useRef } from 'react'

export default function Index() {
    const homeRef= useRef(null)
    const aboutRef= useRef(null)
    const profileRef= useRef(null)
    const galleryRef= useRef(null)

    const homeScroll = () => homeRef.current.scrollIntoView()    
    const galleryScroll = () => galleryRef.current.scrollIntoView()  
    const aboutScroll = () => aboutRef.current.scrollIntoView()
    const profileScroll = () => profileRef.current.scrollIntoView()    
    return (
        <div>
            <Navbar/>
            <Menubar homeScroll={homeScroll} galleryScroll={galleryScroll} aboutScroll={aboutScroll} profileScroll={profileScroll}/>
            <div className='component' style={{backgroundColor:'red'}} ref={homeRef}>Home</div>
            <div className='component' style={{backgroundColor:'blue'}} ref={aboutRef}>About</div>
            <div className='component' style={{backgroundColor:'green'}} ref={profileRef}>Profile</div>
            <div className='component' style={{backgroundColor:'yellow'}} ref={galleryRef}>Gallery</div>
        </div>
    )
}
