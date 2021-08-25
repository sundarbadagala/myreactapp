import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick]= useState(false)
    const clickHandler=()=> setClick(!click)
    return (
        <nav className='navbar'>
            <div className='nav-logo'>
                <Link to='/' className='nav-logo-link'>React<i className='fab fa-react'></i></Link>
            </div>
            <div onClick={clickHandler} className='nav-menu-logo'>
                <i className={click ? 'fas fa-times':'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu':'nav-menu active'}>
                <li className='nav-items'>
                    <Link to='/' className='nav-links'>
                        Home
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to='/services' className='nav-links'>
                        Services
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to='/products' className='nav-links'>
                        Products
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to='/sign-up' className='nav-links nav-sign'>
                        Sign Up
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
