import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProductsRequest} from './redux/actions'

function Users() {
    const dispatch = useDispatch()
    const {data, error, isLoading} = useSelector( state => state.users)
    useEffect(()=>{
        dispatch(fetchProductsRequest())
    },[])
    console.log('data',data)
    console.log('error',error)
    console.log('isLoading',isLoading)
    return (
        <div>
            users page
        </div>
    )
}

export default Users
