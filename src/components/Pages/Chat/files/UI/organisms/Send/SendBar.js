import React, { useState } from 'react'
//import {Send} from '../chatStyled'
import { Send } from './sendStyled'
import { useSelector, useDispatch} from 'react-redux'
import {sendMessage} from '../../../redux/actions'
import Label from '../../atoms/Label/Label'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'

function Sending(props) {
    const userId = useSelector(state => state.users.userId)
    const dispatch= useDispatch()
    const [message, setMessage]= useState('')
    const submitHandler=(e, id)=>{
        e.preventDefault()
        dispatch(sendMessage(message, id))
        setMessage('')
    }
    
    return (
        <Send>
            <form onSubmit={(e)=>submitHandler(e, userId)}>
                <Label className='send-label'>
                    New Message
                </Label><br/>
                <Input 
                    type='text' 
                    value={message} 
                    placeholder='Type Something...' 
                    onChange={(e)=>setMessage(e.target.value)} 
                    className='message-input'
                />
                <Button
                    type='submit'
                    className='send-btn'
                >
                    SEND 
                    <i className="fas fa-paper-plane"></i>
                </Button>
            </form>
        </Send>
    )
}

export default Sending
