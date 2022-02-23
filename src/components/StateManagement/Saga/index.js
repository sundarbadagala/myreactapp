import React from 'react'
import store from './redux/store'
import {Provider} from 'react-redux'
import Users from './Users'

function Index() {
    return (
        <Provider store={store}>
            <Users/>
        </Provider>
    )
}

export default Index
