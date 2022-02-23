import React from 'react'
import {Provider} from 'react-redux'
import {ProductProvider} from './useContext/Context'
import store from './redux/store'

import Count from './CountReducer'
import Count2 from './CountUseState'
import Count3 from './CountClass'
import Count4 from './CountContext'
import Count5 from './CountUseContext'
import Count6 from './CountUseReducer'

function Index() {
    return (
        <ProductProvider>
        <Provider store={store}>
            <Count/>
            <Count6/>
            <Count4/>
            <Count5/>
            <Count2/>
            <Count3/>
        </Provider>
        </ProductProvider>
    )
}

export default Index

