import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./MyPages.css";

import Home from "./Home/Home.js";
import Operations from "./Operations/Operations.js";

//explore pages
import Explore from "./Explore/Explore.js";
//explore reports pages
import Report1 from "./Explore/Reports/Content/OnCovid/Report1/Report1";
import Report2 from "./Explore/Reports/Content/OnCovid/Report2/Report2";
import Report3 from "./Explore/Reports/Content/OnCovid/Report3/Report3";
import Report4 from "./Explore/Reports/Content/OnCovid/Report4/Report4";
import Report5 from "./Explore/Reports/Content/OnCovid/Report5/Report5";
import Report6 from "./Explore/Reports/Content/OnCovid/Report6/Report6";
import Report7 from "./Explore/Reports/Content/OnCovid/Report7/Report7";

import BecomeAPart from "./BecomeAPart/BecomeAPart.js"

// about pages
import About from "./AboutUs/About.js";
//about whatwedo pages
import Box1 from "./AboutUs/WhatWeDo/Content/Boxs/Box1.js"
import Box2 from "./AboutUs/WhatWeDo/Content/Boxs/Box2.js"
import Box3 from "./AboutUs/WhatWeDo/Content/Boxs/Box3.js"
import Box4 from "./AboutUs/WhatWeDo/Content/Boxs/Box4.js"
import Box5 from "./AboutUs/WhatWeDo/Content/Boxs/Box5.js"
import Box6 from "./AboutUs/WhatWeDo/Content/Boxs/Box6.js"
import Box7 from "./AboutUs/WhatWeDo/Content/Boxs/Box7.js"
import Box8 from "./AboutUs/WhatWeDo/Content/Boxs/Box8.js"
import Box9 from "./AboutUs/WhatWeDo/Content/Boxs/Box9.js"
import Box10 from "./AboutUs/WhatWeDo/Content/Boxs/Box10.js"
import Box11 from "./AboutUs/WhatWeDo/Content/Boxs/Box11.js"


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

            {/* whatwedo pages */}
            <Route exact path="/about/whatwedo">
                <About/>
            </Route>
            <Route exact path="/about/whatwedo/box1">
                <Box1 />
            </Route>
            <Route exact path="/about/whatwedo/box2">
                <Box2/>
            </Route>
            <Route exact path="/about/whatwedo/box3">
                <Box3/>
            </Route>
            <Route exact path="/about/whatwedo/box4">
                <Box4/>
            </Route>
            <Route exact path="/about/whatwedo/box5">
                <Box5/>
            </Route>
            <Route exact path="/about/whatwedo/box6">
                <Box6/>
            </Route>
            <Route exact path="/about/whatwedo/box7">
                <Box7/>
            </Route>
            <Route exact path="/about/whatwedo/box8">
                <Box8/>
            </Route>
            <Route exact path="/about/whatwedo/box9">
                <Box9/>
            </Route>
            <Route exact path="/about/whatwedo/box10">
                <Box10/>
            </Route>
            <Route exact path="/about/whatwedo/box11">
                <Box11/>
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
            <Route exact path="/explore/reports/covid-19/report-1">
                <Report1 />
            </Route>
            <Route exact path="/explore/reports/covid-19/report-2">
                <Report2 />
            </Route>
            <Route exact path="/explore/reports/covid-19/report-3">
                <Report3 />
            </Route>
            <Route exact path="/explore/reports/covid-19/report-4">
                <Report4 />
            </Route>
            <Route exact path="/explore/reports/covid-19/report-5">
                <Report5 />
            </Route>
            <Route exact path="/explore/reports/covid-19/report-6">
                <Report6 />
            </Route>
            <Route exact path="/explore/reports/covid-19/report-7">
                <Report7 />
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