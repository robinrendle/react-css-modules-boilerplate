import React from 'react'
import {Route, Redirect} from 'react-router'
import Main from './templates/Main.js'
import Home from './templates/Home.js'
import About from './templates/About.js'

module.exports = (
    <Route component={Main}>
        <Route path='/' component={Home}/>
        <Route path='/about' component={About}/>
    </Route>
)
