import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Products from './Products'
import Details from './Details'

function Main() {
    return (
        <Router>
            for details page
            <Switch>
                <Route exact path='/'><Products/></Route>
                <Route path='/details/:title'><Details/></Route>
            </Switch>
        </Router>
    )
}

export default Main
