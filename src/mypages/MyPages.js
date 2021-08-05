import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./MyPages.css";

import Home from "./Home/Home.js";
import Operations from "./Operations/Operations.js";
import Explore from "./Explore/Explore.js";
import BecomeAPart from "./BecomeAPart/BecomeAPart.js"
import About from "./AboutUs/About.js";


const MyPages = () =>{
    return(
        <>
        <Switch >
            {/* Home Page */}
            <Route exact path="/">
                <Home/>
            </Route>

            {/* About Page */}
           
            <Route exact path="/about/mission">
                <About/>
            </Route>
            <Route exact path="/about/whoweare">
                <About/>
            </Route>
            <Route exact path="/about/whatwedo">
                <About/>
            </Route>
            <Route exact path="/about/howwedo">
                <About/>
            </Route>
            <Route exact path="/about/governance">
                <About/>
            </Route>
            <Route exact path="/about/lifeatftp">
                <About/>
            </Route>
            

            {/* Become a part  Page */}
           
            <Route exact path="/becomeapart/partners">
                <BecomeAPart />
            </Route>
            <Route exact path="/becomeapart/communities">
                <BecomeAPart />
            </Route>
            <Route exact path="/becomeapart/careers">
                <BecomeAPart />
            </Route>
            

            {/* Explore  Page */}
            
            <Route exact path="/explore/blog">
                <Explore />
            </Route>
            <Route exact path="/explore/reports">
                <Explore />
            </Route>
            <Route exact path="/explore/finance">
                <Explore />
            </Route>
            <Route exact path="/explore/contact">
                <Explore />
            </Route>
            
            


            {/* Operations Page */}
            
            <Route exact path="/operations/events">
                <Operations />
            </Route>
            <Route exact path="/operations/projects">
                <Operations />
            </Route>
            <Route exact path="/operations/gallery">
                <Operations />
            </Route>
           
        </Switch>
        </>
    )
}

export default MyPages;