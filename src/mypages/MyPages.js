import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from "./Home/Home.js";
import About from "./About/About.js";
import People from "./People/People.js";
import Operations from "./Operations/Operations.js";
import Report from "./Reports/Report.js";
import Blog from "./Blog/Blog.js";

const MyPages = () =>{
    return(
        <>
        <Switch >
            {/* Home Page */}
            <Route exact path="/">
                <Home/>
            </Route>

            {/* About Page */}
            <Route exact path="/about">
                <About/>
            </Route>
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
            <Route exact path="/about/finance">
                <About/>
            </Route>
            <Route exact path="/about/contact">
                <About/>
            </Route>

            {/* People Page */}
            <Route exact path="/people">
                <People/>
            </Route>
            <Route exact path="/people/members">
                <People/>
            </Route>
            <Route exact path="/people/careers">
                <People/>
            </Route>
            <Route exact path="/people/communities">
                <People/>
            </Route>
            <Route exact path="/people/partners">
                <People/>
            </Route>
            <Route exact path="/people/lifeatftp">
                <People/>
            </Route>

            {/* Operations Page */}
            <Route exact path="/operations">
                <Operations />
            </Route>
            <Route exact path="/operations/events">
                <Operations />
            </Route>
            <Route exact path="/operations/projects">
                <Operations />
            </Route>
            <Route exact path="/operations/gallery">
                <Operations />
            </Route>
            <Route exact path="/operations/contact">
                <Operations />
            </Route>

            {/* Report Page */}
            <Route exact path="/reports">
                <Report />
            </Route>

            {/* Blog Page */}
            <Route exact path="/blog">
                <Blog />
            </Route>


        </Switch>
        </>
    )
}

export default MyPages;