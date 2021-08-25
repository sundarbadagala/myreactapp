import React, { useState } from 'react'
import {Alert, Button} from 'react-bootstrap'

function Main() {
    const [show, setShow]= useState(true)
    return (
        <div>
            <Alert variant='primary' show={show} className='d-flex justify-content-between'>
                <div>
                    <Alert.Heading>Alert Heading</Alert.Heading>
                    <p>Alert Content <Alert.Link>Alert Link</Alert.Link> </p>
                </div>
                <div>
                    <Button onClick={()=>setShow(false)}>Close</Button>
                </div>
            </Alert>
        </div>
    )
}

export default Main
