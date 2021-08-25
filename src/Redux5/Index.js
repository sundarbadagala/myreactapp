import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import Products from './Products'

function Index() {
    return (
        <Provider store={store}>
            <Products/>
        </Provider>
    )
}

export default Index
