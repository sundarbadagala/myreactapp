import React from 'react'
import Mobile from './mobileStore'
import {Provider} from 'react-redux'
import store from './redux/store/store'

function Index() {
    return (
        <Provider store={store}>
            <Mobile/>
        </Provider>
    )
}

export default Index
