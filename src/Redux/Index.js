import React from 'react'
import {Provider} from 'react-redux'
import {ProductProvider} from './Context'
import store from './redux/store'

import Count from './CountReducer'
import Count2 from './CountUseState'
import Count3 from './CountClass'
import Count4 from './CountContext'
import Count5 from './CountUseContext'

function Index() {
    return (
        <ProductProvider>
        <Provider store={store}>
            <Count/>
            <Count2/>
            <Count3/>
            <Count4/>
            <Count5/>
        </Provider>
        </ProductProvider>
    )
}

export default Index

