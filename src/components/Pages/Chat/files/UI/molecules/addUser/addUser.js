import React, {useState} from 'react'
import {addUser} from '../../../redux/actions'
import { useDispatch} from 'react-redux'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'

function AddUser() {
    const dispatch= useDispatch()
    const [userName, setUserName]= useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(addUser(userName))
        setUserName('')
    }
    return (
        <form onSubmit={(e)=>submitHandler(e)}>
            <Input 
                type='text' 
                placeholder='Add User' 
                onChange={(e)=>setUserName(e.target.value)} 
                value={userName}
                className='users-input'
            />
            <Button 
                type='submit'
                className='users-add-btn' 
            >
                <i className="fas fa-user-plus"></i>
            </Button>
        </form>
    )
}


export default AddUser
