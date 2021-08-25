import React from 'react'
import {Button} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <NavLink  activeClassName='font-weight-bold' to='/'>Home</NavLink>
            <NavLink  activeClassName='font-weight-bold' to='/about'>About</NavLink>
            <NavLink  activeClassName='font-weight-bold' to='/contact'>Contact</NavLink>
        </div>
    )
}

export default Navbar
