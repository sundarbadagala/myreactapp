import React, { useEffect, useState } from 'react'
import {Users} from './usersStyled'
import {useSelector, useDispatch} from 'react-redux'
import { fetchUsers, getUserId} from '../../../redux/actions'
import Header from '../../atoms/Header/Header'
import UsersList from '../../molecules/UsersList/usersList'
import AddUser from '../../molecules/addUser/addUser'


function Usering() {
    const users = useSelector(state => state.users.users)
    const dispatch= useDispatch()
    // const {users, getUserId, fetchUsers}= props
    const [singleUser, setSingleUser]= useState([])
    const clickHandler=(id)=>{
        setSingleUser(id)
        dispatch(getUserId(id))
    }
   useEffect(()=>{
       dispatch(fetchUsers())
   },[])
   console.log(users)
    return (
            <Users>
                <Header className='header-user'>
                    Users
                </Header>
                <UsersList users={users} singleUser={singleUser} onClick={clickHandler}/>
                <AddUser/>  
            </Users>
    )
}


export default Usering
