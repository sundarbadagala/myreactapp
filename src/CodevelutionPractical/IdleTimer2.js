import React, { useRef, useState } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'


Modal.setAppElement('#root')

function Timer() {
    const [isLogedIn, setIsLoggedIn]= useState(true)
    const [isModalOpen, setIsModalOpen]= useState(false)
    const idleRef= useRef(null)
    const onIdle=()=>{
        setIsModalOpen(true)
        setIsLoggedIn(false)
    }
    return (
        <div>
            {
                isLogedIn ? <h1>Idle Timere will on after 5 seconds</h1> : <h1>Hello Guest</h1>
            }
            <Modal isOpen={isModalOpen} style={{width:'100px'}}>
                Your are idle for 5 seconds...
            </Modal>
            <IdleTimer
                ref={idleRef}
                timeout={5*1000}
                onIdle={onIdle}
            />
        </div>
    )
}

export default Timer
