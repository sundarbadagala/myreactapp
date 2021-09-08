import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {addUser, getAllUsers, getSingleUser, editUser, deleteUser} from '../redux/actions/actions'

const style={
    event:{
        border:'1px solid black',
        backgroundColor:'pink',
        padding:'2px 5px',
        margin:'2px'
    },
    users:{
        border:'1px solid black',
        backgroundColor:'yellowgreen',
        padding:'2px 5px',
        margin:'2px'
    }
}

function Details(props) {
    const {users, getAllUsers, user, getSingleUser, addUser, editUser, deleteUser}= props
    // console.log(users)
    // console.log(user)
    return (
        <div>
            {
                users.map(item => 
                    <button key={item.id} style={style.users}>
                        {item.name}
                    </button>)
            }
            <h3>users length {users.length}</h3>
            <button style={style.event} onClick={()=>getAllUsers()}>Get All Users</button>
            <button style={style.event} onClick={()=>getSingleUser(2)}>Get Sinlge User</button>
            <button style={style.event} onClick={()=>addUser({name:'Venky'})}>Add User</button>
            <button style={style.event} onClick={()=>editUser({name:'Venky'}, 1)}>Edit User</button>
            <button style={style.event} onClick={()=>deleteUser(4)}>Delete User</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        users: state.users.users,
        user: state.users.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        getAllUsers,
        getSingleUser,
        addUser,
        editUser,
        deleteUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
