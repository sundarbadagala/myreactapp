import { useEffect, useState } from 'react'
import './styles.css'

export default function Navbar (){
    const [show, setShow]= useState(false)
    const controlNavbar = () =>{
        if(window.scrollY > 150){
            setShow(true)
        }else{
            setShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', controlNavbar )

        return ()=>{
            window.removeEventListener('scroll', controlNavbar)
        }
    },[])
    return(
        <div className={`nav ${show && `nav_blue`}`}>
            this is navbar
        </div>
    )
}