import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap'

function Modal2() {
    const [show, setShow] = useState(false)
    const onShow=()=>{
        setShow(true)
    }
    const onHide=()=>{
        setShow(false)
    }
    return (
        <div>
            <Button onClick={onShow}>Show Modal</Button>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>This is the title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>This is the body</h1>
                    <p>You can't close this modal by clicking outside the modal</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Modal2
