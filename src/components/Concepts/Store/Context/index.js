import React from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Default from './components/Default'
import {ProductProvider} from './components/Context'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function Index() {
    return (
        <ProductProvider>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/'><ProductList/></Route>
                    <Route path='/cart'><Cart/></Route>
                    <Route path='/details'><Details/></Route>
                    <Route><Default/></Route>
                </Switch>
            </Router>
        </ProductProvider>
    )
}

export default Index
