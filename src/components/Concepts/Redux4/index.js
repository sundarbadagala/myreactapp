import React from 'react'
import Main from './main'
import {Provider} from 'react-redux'
import store from './redux/store'

function Index() {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    )
}

export default Index
