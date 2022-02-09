import React, { useState } from 'react'
import {Button, Modal} from 'react-bootstrap'

function Modals() {
    const [show, setShow]= useState(false)
    const onShow=()=>{
        setShow(true)
    }
    const onHide=()=>{
        setShow(false)
    }
    return (
        <div className='m-2'>
            <Button onClick={onShow}>Click Here for Modal</Button>
            <Modal show={show} onHide={onHide}>
                <Modal.Header>
                    <Modal.Title>
                        This is modal Title
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Modal body which helps to provide information of alert, warning<br/>
                    You can click the Outside the modal to close 
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Modals
