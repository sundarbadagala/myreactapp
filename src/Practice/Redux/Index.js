import React from 'react'
import Card from './Card'
import {Provider} from 'react-redux'
import store from './redux/store'


function Index() {
    return (
        <Provider store={store}>
            <Card/>
        </Provider>
    )
}

export default Index
