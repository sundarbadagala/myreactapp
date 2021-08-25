import React from 'react'
import {ButtonGroup, Button, ButtonToolbar, DropdownButton, Dropdown} from 'react-bootstrap'

function Main() {
    return (
        <div className='container-fluid p-2'>
            <ButtonGroup>
                <Button>Button Group 1</Button>
                <Button>Button Group 2</Button>
                <Button>Button Group 3</Button>
            </ButtonGroup>
            <hr/>
            <ButtonGroup>
                <Button>Home</Button>
                <Button>Gallery</Button>
                <Button>Services</Button>
                <Button>About Us</Button>
                <Button>Sign Up</Button>
            </ButtonGroup>
            <hr/>
            <ButtonToolbar>
                <ButtonGroup  className='mr-2'>
                    <Button>Gallery</Button>
                    <Button>Videos</Button>
                    <Button>Songs</Button>
                </ButtonGroup>
                <ButtonGroup className='mr-2'>
                    <Button>Services</Button>
                    <Button>Products</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button>Services</Button>
                    <Button>Products</Button>
                </ButtonGroup>
            </ButtonToolbar>
            <hr/>
            <ButtonGroup size='sm'>
                <Button>Home</Button>
                <Button>Services</Button>
                <Button>Products</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button>Home</Button>
                <Button>Services</Button>
                <Button>Products</Button>
            </ButtonGroup>
            <ButtonGroup size='lg'>
                <Button>Home</Button>
                <Button>Services</Button>
                <Button>Products</Button>
            </ButtonGroup>
            <hr/>
            <ButtonGroup className='mr-2'>
                <DropdownButton as={ButtonGroup} title='Home' id='nested-dropdown'>
                    <Dropdown.Item eventKey='1'>Services</Dropdown.Item>
                    <Dropdown.Item eventKey='2'>Products</Dropdown.Item>
                    <Dropdown.Item eventKey='3'>About Us</Dropdown.Item>
                    <Dropdown.Item eventKey='4'>Sign Up</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>

            <ButtonGroup className='mr-2'>
                <Button>Home</Button>
                <Button>Services</Button>
                <Button>Products</Button>
                <DropdownButton as={ButtonGroup} title='Media' id='button-group'>
                    <Dropdown.Item eventKey='1'>Gallery</Dropdown.Item>
                    <Dropdown.Item eventKey='2'>Videos</Dropdown.Item>
                    <Dropdown.Item eventKey='3'>Songs</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>

            <ButtonGroup vertical>
                <Button>Home</Button>
                <Button>Services</Button>
                <Button>Products</Button>
                <DropdownButton as={ButtonGroup} title='Media' id='button-group'>
                    <Dropdown.Item eventKey='1'>Gallery</Dropdown.Item>
                    <Dropdown.Item eventKey='2'>Videos</Dropdown.Item>
                    <Dropdown.Item eventKey='3'>Songs</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
            
        </div>
    )
}

export default Main
