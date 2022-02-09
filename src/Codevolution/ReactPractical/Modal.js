import React, { useState } from 'react'
import Modal from 'react-modal'

//reactcommunity.org/react-modal/styles

Modal.setAppElement('#root')

function Alert() {
    const [open, setOpen]= useState(false)
    return (
        <div>
            <button onClick={()=>setOpen(true)}>Open Modal</button>

            <Modal 
                isOpen={open} //this is basic condition it will not help to close the modal by onBlur method or pressing ESCape key ......without both down conditions by only this condition we cannot close the modal by onBlur and pressing ESCape key
                onRequestClose={()=>setOpen(false)} //by using this condition we can close the modal by onBlur method and pressing ESCape key
                shouldCloseOnOverlayClick={false}   //by this condition we cannot close the modal by onBlur but we can close the modal by pressing ESCape key 
                style= {{
                    overlay:{
                        // backgroundColor:'green' 
                         backgroundColor: 'rgba(255, 255, 255, 0.75)'
                    },
                    content:{
                        color:'orange'
                    }

                }}
            >
                <h1>Modal Title</h1>
                <p>Modal Content</p>
                <button onClick={()=>setOpen(false)}>Close</button>
            </Modal>
        </div>
    )
}

export default Alert
