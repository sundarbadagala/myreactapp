import React, { useState } from 'react'
import './Navbar.css'
import Button from '../Multi/Button'

function Navbar() {
    const [click, setClick]= useState(false)
    return (
        <div className='main'>
            <div className='logo'>
                Lavish <i class="fal fa-alicorn"></i>

            </div>
            <div onClick={()=>setClick(!click)} className='icon'>
                {click ? <i className='fas fa-times'/> : <i className='fas fa-bars'/>}
            </div>
            <div className={click ? 'menu active':'menu'}>
                <ul className='list'>
                    <li className='link'>HOME</li>
                    <li className='link'>GALLERY</li>
                    <li className='link'>PRODUCTS</li>
                    <li className='link'>SERVICES</li>
                    <li className='link'>SIGN UP</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
