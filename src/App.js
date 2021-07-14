//importing  states  from react
import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";

//importing logo
import navLogo from "./forthepeople.png"

//importing navbar javascript file from navbar component
import NavBar from "./components/NavBar/NavBar.js"

import MenuBar from "./components/Menu/MenuBar.js";

import MenuTogglerButton from "./components/Menu/MenuTogglerButton.js";

//Home Page
import Home from "./pages/home/Home.js"

//About Page

import About from "./pages/about/About.js"

import Mission from "./pages/about/Mission/Mission.js"

import Contact from "./pages/about/Contact/Contact.js"

import Finance from "./pages/about/Finance/Finance.js"

import Governance from "./pages/about/Governance/Governance.js"

import HowWeDo from "./pages/about/Howwedo/Howwedo.js"

import WhatWeDo from "./pages/about/Whatwedo/Whatwedo.js"

import WhoWeAre from "./pages/about/Whoweare/Whoweare.js"

//People page

import People from "./pages/people/People.js"

import Careers from "./pages/people/Careers/Career.js"

import Communities from "./pages/people/Communities/Communities.js"

import LifeAtFtp from "./pages/people/Lifeatftp/Lifeatftp.js"

import Members from "./pages/people/Members/Member.js"

import Partners from "./pages/people/Partners/Partner.js"

//Operations page

import Operation from "./pages/operations/Operation.js"

import Events from "./pages/operations/Events/Events.js"

import Gallery from "./pages/operations/Gallery/Gallery.js"

import Projects from "./pages/operations/Projects/Projects.js"

//report page
import Report from "./pages/report/Report.js"

// name: Naini Yashwanth email: nainiyashwanth@gmail.com

const App = () => {

    //using state to set false value to sidemenuopen variable
    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    return (
        <Router >
            <div>
                <header className="header-section">
                    <nav className="navigation-bar">
                        <div className="toggler-button hambutton">
                            {/*  using onclick method to change the sidemenuopen value to 'true' when the
* t
 * oggler button clicked

 */
                            }
                            <button onClick={() => setSideMenuOpen(true)} className="ham-button"><MenuTogglerButton/></button>

                        </div>
                        <div>
                            <a href="/"><img className="nav-icon" src={navLogo} alt="My logo"/></a>
                        </div>

                        <NavBar/> {/*  using conditional statement to open sidemenubar when sidemenuopen value is't
 * rue'
 */
                        }
                        {
                            sideMenuOpen
                                ? <MenuBar/>
                                : null
                        }
                        {/* using onclick method to change the sidemenuopen value to 'false' when the
 * backdrop is clicked
 */
                        }
                        <div className="backdrop" onClick={() => setSideMenuOpen(false)}></div>

                    </nav>
                    <div className="line"></div>
                </header>

                <div className="page-load">
                    <Switch>
                        {/* Home Page */}
                        <Route exact="exact" path="/">
                            <Home/>
                        </Route>

                        {/* about page */}

                        <Route path="/about" exact="exact">
                            <About/>
                        </Route>

                        <Route path="/about/mission" exact="exact">
                            <Mission/>
                        </Route>

                        <Route path="/about/contact" exact="exact">
                            <Contact/>
                        </Route>

                        <Route path="/about/finance" exact="exact">
                            <Finance/>
                        </Route>

                        <Route path="/about/governance" exact="exact">
                            <Governance/>
                        </Route>

                        <Route path="/about/howwedo" exact="exact">
                            <HowWeDo/>
                        </Route>

                        <Route path="/about/whatwedo" exact="exact">
                            <WhatWeDo/>
                        </Route>

                        <Route path="/about/whoweare" exact="exact">
                            <WhoWeAre/>
                        </Route>

                        {/* people page */}

                        <Route path="/people" exact="exact">
                            <People/>
                        </Route>

                        <Route path="/people/career" exact="exact">
                            <Careers/>
                        </Route>

                        <Route path="/people/community" exact="exact">
                            <Communities/>
                        </Route>

                        <Route path="/people/lifeatftp" exact="exact">
                            <LifeAtFtp/>
                        </Route>

                        <Route path="/people/member" exact="exact">
                            <Members/>
                        </Route>

                        <Route path="/people/partner" exact="exact">
                            <Partners/>
                        </Route>
                        {/* operations page*/}
                        <Route path="/operations" exact="exact">
                            <Operation/>
                        </Route>

                        <Route path="/operations/events" exact="exact">
                            <Events/>
                        </Route>

                        <Route path="/operations/gallery" exact="exact">
                            <Gallery/>
                        </Route>

                        <Route path="/operations/projects" exact="exact">
                            <Projects/>
                        </Route>

                        {/* report page */}
                        <Route path="/report" exact="exact">
                            <Report/>
                        </Route>
                    </Switch>
                </div>

            </div>
        </Router>
    );
};

export default App;
