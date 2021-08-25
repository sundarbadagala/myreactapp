import React from 'react'
import {Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap'

function Navbars() {
    return (
        <Navbar bg='light' expand='lg' className='border border-primary'> 
        <Col md={12} lg={8} className='border border-primary d-flex justify-content-between'>
            <Navbar.Brand className='border border-danger ml-2'>React Bootstrap</Navbar.Brand>
            <Navbar.Toggle  className='border border-danger' aria-controls='basic-navbar'/><br/>
        </Col>
        <Col className='m-auto border' >
            <Navbar.Collapse>
            <Nav id='basic-navbar'>
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Gallery</Nav.Link>
                <Nav.Link>Services</Nav.Link>
                <NavDropdown title='About Us'>
                    <NavDropdown.Item>Actor</NavDropdown.Item>
                    <NavDropdown.Item>Director</NavDropdown.Item>
                    <NavDropdown.Item>Producer</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            </Col>
        </Navbar>

    )
}

export default Navbars
