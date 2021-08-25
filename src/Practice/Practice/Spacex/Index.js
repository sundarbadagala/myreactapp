import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import List from './List'
import View from './View'

function Index() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'><List/></Route>
                <Route path='/launch/:flight_number'><View/></Route>
            </Switch>
        </Router>
    )
}

export default Index
