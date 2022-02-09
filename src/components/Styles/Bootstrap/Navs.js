import React from 'react'
import {Nav, NavDropdown} from 'react-bootstrap'

function Navs() {
    const selectHandle=(selectedKey)=>{
        alert(`selected ${selectedKey}`)
    }
    return (
        <div>
            <Nav activeKey='home' onSelect={selectHandle}>
                <Nav.Item>
                    <Nav.Link eventKey='home'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='gallery'>Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='services'>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='about us'>About Us</Nav.Link>
                </Nav.Item>
            </Nav>
            <hr/>
            <Nav activeKey='home' onSelect={selectHandle} className='flex-column'>
                <Nav.Item>
                    <Nav.Link eventKey='home'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='gallery'>Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='services'>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='about us'>About Us</Nav.Link>
                </Nav.Item>
            </Nav>
            <hr/> 
            <Nav variant='tabs'>
                <Nav.Item>
                    <Nav.Link eventKey='home'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='gallery'>Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='services'>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='about us'>About Us</Nav.Link>
                </Nav.Item>
            </Nav>
            <hr/>
            <Nav fill variant='tabs'>
                <Nav.Item>
                    <Nav.Link eventKey='home'>AAAAAAAAAAAAAA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='gallery'>BBBBB</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='services'>CCC</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='about us'>D</Nav.Link>
                </Nav.Item>
            </Nav>
            <hr/>
            <Nav justify variant='tabs'>
                <Nav.Item>
                    <Nav.Link eventKey='home'>AAAAAAAAAAAAAA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='gallery'>BBBBB</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='services'>CCC</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='about us'>D</Nav.Link>
                </Nav.Item>
            </Nav>
            <hr/>
            <Nav variant='tabs'>
                <Nav.Item>
                    <Nav.Link eventKey='home'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='gallery'>Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='services'>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <NavDropdown title='about us'>
                        <NavDropdown.Item eventKey='director'>Director</NavDropdown.Item>
                        <NavDropdown.Item eventKey='producer'>Producer</NavDropdown.Item>
                        <NavDropdown.Item eventKey='Actor'>Actor</NavDropdown.Item>
                    </NavDropdown>
                </Nav.Item>
            </Nav>
            <hr/>
            <Nav variant='pills'>
                <Nav.Item>
                    <Nav.Link eventKey='home'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='gallery'>Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='services'>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='about us'>About Us</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Navs
