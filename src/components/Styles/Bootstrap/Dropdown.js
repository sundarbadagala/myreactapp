import React from 'react'
import {DropdownButton, Dropdown, Button, ButtonGroup, SplitButton} from 'react-bootstrap'

function Main() {
    return (
        <div>
            <DropdownButton title='Dropdown button' variant='success' id='dropdown-buttons'>
                <Dropdown.Item href='#'>item 1</Dropdown.Item>
                <Dropdown.Item href='#'>item 1</Dropdown.Item>
                <Dropdown.Item href='#'>item 1</Dropdown.Item>
            </DropdownButton>
            <hr/>
            <Dropdown>
                <Dropdown.Toggle>Dropdown Toggle</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href='#'>item 1</Dropdown.Item>
                    <Dropdown.Item href='#'>item 1</Dropdown.Item>
                    <Dropdown.Item href='#'>item 1</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <hr/>
            <Dropdown as={ButtonGroup}>
                <Button>Dropdown split</Button>
                <Dropdown.Toggle split/>
                <Dropdown.Menu>
                    <Dropdown.Item>Item 1</Dropdown.Item>
                    <Dropdown.Item>Item 1</Dropdown.Item>
                    <Dropdown.Item>Item 1</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <hr/>
            <Dropdown as={ButtonGroup}>
                <Button variant='secondary'>Dropdown split</Button>
                <Dropdown.Toggle split variant='dark'/>
                <Dropdown.Menu>
                    <Dropdown.Item>Item 1</Dropdown.Item>
                    <Dropdown.Item>Item 1</Dropdown.Item>
                    <Dropdown.Item>Item 1</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <hr/>
            <div className="mb-2">
                {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="lg"
                    title="Drop large"
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownType>
                ))}
            </div>
            <hr/>
        </div>
    )
}

export default Main
