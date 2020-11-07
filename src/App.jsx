import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Footer from './Footer';



import {Redirect, Route, Switch} from 'react-router-dom';
const App = ()=>{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/service" component={Service}/>
            <Redirect to="/"/>
        </Switch>

        <Footer/>
        
        </>
    )
}

export default App;