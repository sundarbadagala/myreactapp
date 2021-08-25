import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap'

function Main() {
    const [show, setShow]= useState(false)
    const onShow=()=>{
        setShow(true)
    }
    const onHide=()=>{
        setShow(false)
    }
    return (
        <div>
            <Button onClick={onShow}>Centered Modal</Button>
            <Modall show={show} onHide={onHide}/>
        </div>
    )
}


function Modall(props){
    return(
        <div>
            <Modal show={props.show} centered size='lg' onHide={props.onHide}>
                <Modal.Header>
                    This is header
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title>
                        this is the title
                    </Modal.Title>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Main
