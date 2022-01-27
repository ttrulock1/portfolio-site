import React from 'react'
import { Navbar } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import About from './About';
import ContactMe from './ContactMe';
const Main = ()=>{
    return (
       
            
            <Router>
            <h1>Main Menu</h1>
                    <Route path='/about'>
                        <About/>
                    </Route>
                    <Route path='/contact'>
                        <ContactMe/>
                    </Route>
                

            </Router>
        

    )

}

export default Main;



