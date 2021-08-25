import React from 'react'
import {MenuItems} from './MenuItems'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [clicked, setClicked]= useState(true)
    const clickHandler=()=>setClicked(!clicked)
    return (
        <nav className='navbar'>
            <div className='nav-logo'>
                React <i className="fab fa-jenkins"></i>
            </div>
            <div onClick={clickHandler} className='menu-logo'>
                <i className={clicked ?  'fas fa-bars':'fas fa-times'}/>
            </div>
            <ul className={clicked ? 'nav-menu':'nav-menu active'}>
                {
                    MenuItems.map((item, index) => <li key={index} className='nav-item' onClick={()=>setClicked(true)}><Link to={item.url} className={item.cName}>{item.title}</Link></li>)
                }
            </ul>
        </nav>
    )
}

export default Navbar
