import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './RouterSub'
import Arrow from './ArrowFunction'
import Hide from './ContentHide'
import Review from './Review'
import Menu from './Menu'

function Routing() {
    return (
        <div>
            <Router>
                <Home/>
                <Switch>
                    <Route exact path='/'><Menu/></Route>
                    <Route path='/arrow'><Arrow/></Route>
                    <Route path='/hide'><Hide/></Route>
                    <Route path='/review'><Review/></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routing
