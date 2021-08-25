import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {getAllUsers} from './redux/actions/actions'

function Users(props) {
    const {getAllUsers, users}= props
    useEffect(()=>{
        getAllUsers()
    },[])
    console.log(users)
    return (
        <ul>
            {
                users.map(item => <li>{item.name}</li>)
            }
        </ul>
    )
}

const mapStateToProps=(state)=>{
    return{
        users: state.users.users
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        getAllUsers
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
