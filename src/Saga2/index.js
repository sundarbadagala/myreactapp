import React from 'react'
import Users from './users'
import {Provider} from 'react-redux'
import store from './redux/store/store'

function index() {
    return (
        <Provider store={store}>
            <Users/>
        </Provider>
    )
}

export default index
