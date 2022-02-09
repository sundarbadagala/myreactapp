import React from 'react'
import Navbar from './Navbar/Index'
import Footer from './Footer/Index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Gallery from './Pages/Gallery/Gallery'
import Products from './Pages/Products/Products'
import AboutUs from './Pages/AboutUs/About'
import SignUp from './Pages/SignUp'

import Story from './Pages/Pages/Page'


function Index() {
    return (
        <div>
            <Router>
            <Navbar/>
                <Switch>
                    <Route exact path='/'><Home/></Route>
                    <Route path='/gallery'><Gallery/></Route>
                    <Route path='/products'><Products/></Route>
                    <Route path='/about'><AboutUs/></Route>
                    <Route path='/sign'><SignUp/></Route>

                    <Route path='/story'><Story title='STORY'/></Route>
                    <Route path='/clients'><Story title='CLIENTS'/></Route>
                    <Route path='/testimonial'><Story title='TESTIMONIAL'/></Route>

                    <Route path='/marketing'><Story title='MARKETING'/></Route>
                    <Route path='/consulting'><Story title='CONSULTING'/></Route>
                    <Route path='/development'><Story title='DEVELOPMENT'/></Route>
                    <Route path='/design'><Story title='DESIGN'/></Route>

                    <Route path='/story'><Story title='STORY'/></Route>
                    <Route path='/story'><Story title='STORY'/></Route>
                    <Route path='/story'><Story title='STORY'/></Route>
                    <Route path='/story'><Story title='STORY'/></Route>


                </Switch>
            
            </Router>
        </div>
    )
}

export default Index
