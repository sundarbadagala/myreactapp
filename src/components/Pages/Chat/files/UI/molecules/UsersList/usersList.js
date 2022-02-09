import React from 'react'
import {UsersList } from './usersListStyled'
import User from '../../atoms/User/User'

function List({users, singleUser, onClick, }) {
    return (
        <UsersList>
            {
                users.map(item => 
                    <User
                        key={item.id}
                        className={`users-list ${item.id===singleUser && 'active'}`}  
                       onClick={()=>onClick(item.id)}
                    >
                        <i className="fas fa-user-circle"></i> 
                         {item.username}
                    </User>
                )
            }
        </UsersList>
    )
}

export default List
