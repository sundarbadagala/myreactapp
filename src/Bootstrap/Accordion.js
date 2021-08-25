import React from 'react'
import {Accordion, Card, Button} from 'react-bootstrap'

function Main() {
    return (
        <div>
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle eventKey='0' as={Button} variant='link'> 
                        Accordion Togle (Click Here)
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                        Accordion Collapse
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

        <hr/><hr/>

        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle eventKey='0' as={Button} variant='link'>
                        The prime minister of India ?
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                        Narendra Modi
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle eventKey='1' as={Button} variant='link'>
                        The longest river in the India?
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='1'>
                    <Card.Body>
                        Ganges
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle eventKey='2' as={Button} variant='link'>
                        What is the Capital of India?
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='2'>
                    <Card.Body>
                        Delhi.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

        <hr/><hr/>

        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey='0'>
                    The prime minister of India?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                        Narendra Modi
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey='1'>
                    The longest river in the India?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='1'>
                    <Card.Body>
                        Ganges
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey='2'>
                    What is the Capital of India?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='2'>
                    <Card.Body>
                        Delhi
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

        </div>
    )
}

export default Main
