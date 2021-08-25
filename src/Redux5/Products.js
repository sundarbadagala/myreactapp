import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchUsers } from './redux/actions'

function Products({products, fetchUsers}) {
    useEffect(()=>{
        fetchUsers()
    },[fetchUsers])
    console.log(products.products)
    return (
        <div>
           {
               products.products.map(item => <div>{item.title}</div>)
           }
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        products : state.products
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchUsers : ()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
