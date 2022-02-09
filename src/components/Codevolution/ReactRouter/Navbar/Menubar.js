import {NavLink} from 'react-router-dom'

export const navLinkStyle=({isActive})=>{
    return{
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'green' : 'red'
    }

}


function Menubar() {
    return (
        <nav>
            <NavLink to='/' style={navLinkStyle}>Home</NavLink>
            <NavLink to='about' style={navLinkStyle}>About</NavLink>
        </nav>
    )
}

export default Menubar
