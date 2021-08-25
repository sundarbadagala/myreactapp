import React, { useState } from 'react'
import {Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'

function Main() {
    const [checkBoxValue, setCheckBoxValue]= useState([])
    const [radioValue, setRadioValue]= useState('')
    const handleCheckBox=(val)=>{
        setCheckBoxValue(val)
    }
    const handleRadio=(val)=>{
        setRadioValue(val)
    }
    console.log(checkBoxValue)
    console.log(radioValue)
    return (
        <div className='container-fluid p-2'>
                <Button>Button</Button>
            <hr/>
                <Button variant='primary'>Primary</Button>
                <Button variant='secondary'>Secondary</Button>
                <Button variant='info'>Info</Button>
                <Button variant='success'>Success</Button>
                <Button variant='warning'>Warning</Button>
                <Button variant='danger'>Danger</Button>
                <Button variant='light'>Light</Button>
                <Button variant='dark'>Dark</Button>
            <hr/>
                <Button variant='outline-primary'>Primary</Button>
                <Button variant='outline-secondary'>Secondary</Button>
                <Button variant='outline-info'>Info</Button>
                <Button variant='outline-success'>Success</Button>
                <Button variant='outline-warning'>Warning</Button>
                <Button variant='outline-danger'>Danger</Button>
                <Button variant='outline-light'>Light</Button>
                <Button variant='outline-dark'>Dark</Button>
            <hr/>
                <Button block>Block</Button>
            <hr/>
                <Button size='sm'>Small</Button>
                <Button>Normal</Button>
                <Button size='lg'>Large</Button>
            <hr/>
                <Button>Normal</Button>
                <Button active>Active</Button>
                <Button disabled>Disabled</Button>
            <hr/>
                <ToggleButtonGroup type='checkbox' name='checkBoxValue' value={checkBoxValue} onChange={handleCheckBox}>
                    <ToggleButton value={1}>Check Box</ToggleButton>
                    <ToggleButton value={2}>Check Box</ToggleButton>
                    <ToggleButton value={3}>Check Box</ToggleButton>
                </ToggleButtonGroup>
            <hr/>
                <ToggleButtonGroup type='radio' name='radioValue' value={radioValue} onChange={handleRadio}>
                    <ToggleButton value={1}>Radio</ToggleButton>
                    <ToggleButton value={2}>Radio</ToggleButton>
                    <ToggleButton value={3}>Radio</ToggleButton>
                </ToggleButtonGroup>
        </div>
    )
}

export default Main
