import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function Index() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/'><Home/></Route>
                <Route path='/about'><About/></Route>
                <Route path='/contact'><Contact/></Route>
            </Switch>
        </Router>
    )
}

export default Index
