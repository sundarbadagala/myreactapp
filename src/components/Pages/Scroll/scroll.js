import React, { useRef } from 'react'
import { Wrapper, Page, Button, Navbar, Down } from './scrollStyled'

const ScrollDemo = () => {
    const homeRef = useRef(null)
    const galleryRef=useRef(null)
    const aboutRef= useRef(null)
 
    const homeScroll = () => homeRef.current.scrollIntoView()    
    const galleryScroll = () => galleryRef.current.scrollIntoView()  
    const aboutScroll = () => aboutRef.current.scrollIntoView()    
 
    return (
       <Wrapper> 
          <Navbar>
            <Button onClick={homeScroll}> Home </Button> 
            <Button onClick={galleryScroll}> Gallery </Button> 
            <Button onClick={aboutScroll}> About </Button> 
          </Navbar>
          <Page bgColor='yellow' ref={homeRef}>
                  HOME
                  <Down>
                     <i className="fas fa-chevron-down" onClick={galleryScroll}></i>
                  </Down>
          </Page>
          <Page bgColor='lavender' ref={galleryRef}>
              GALLERY
         </Page>
         <Page ref={aboutRef} bgColor='lime'>
              ABOUT US
         </Page> 
       </Wrapper>
    )
 }

export default ScrollDemo
