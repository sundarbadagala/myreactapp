import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navabar from './components/Navabar'
import Home from './components/pages/Home'
import Cards from './components/Cards'

function index() {
    return (
        <div>
            <Router>
                <Navabar/>
                <Home/>
                <Cards/>
            </Router>
        </div>
    )
}

export default index
