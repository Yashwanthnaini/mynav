//importing  states  from react
import React, {useState} from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


//importing NavBar Components
import "./components/NavBar/NavBar.css";
import CrossIcon from "./components/NavBar/CrossIcon.js";
import NavBarLinks from "./components/NavBar/NavBarLinks.js";
import NavBarLogo from "./components/NavBar/NavBarLogo.js";
import SearchBar from "./components/NavBar/SearchBar.js";
import SearchIcon from "./components/NavBar/SearchIcon.js";
import Spacer from "./components/NavBar/Spacer.js";
import TogglerButton from "./components/NavBar/TogglerButton.js"


//importing Menubar components
import "./components/Menu/MenuBar.css";
import BackDrop from "./components/Menu/BackDrop.js";
import DropDownIcon from "./components/Menu/DropDownIcon.js";
import DownArrowIcon from "./components/Menu/DownArrowIcon.js";
import ExploreOne from "./components/Menu/ExploreOne.js";
import ExploreTwo from "./components/Menu/ExploreTwo.js";
import Forum from "./components/Menu/Forum.js";
import MenuCrossIcon from "./components/Menu/MenuCrossIcon.js";
import SocialMediaLinks from "./components/Menu/SocialMediaLinks.js";



//Home Page
import Home from "./pages/home/Home.js"

//About Page
import About from "./pages/about/About.js"

//People page
import People from "./pages/people/People.js"

//Operations page
import Operation from "./pages/operations/Operation.js"

//report page
import Report from "./pages/report/Report.js"

import Blog from "./pages/blog/Blog.js";

import Projects from "./pages/projects/Projects.js";

import Events from "./pages/events/Events.js";

// name: Naini Yashwanth email: nainiyashwanth@gmail.com

const App = () => {

    //using state to set false value to sidemenuopen variable
    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const [crossButtonOpen, setCrossButtonOpen] = useState(false);

    const [exploreOneOpen ,setExploreOneOpen] = useState(true);

    const [exploreTwoOpen ,setExploreTwoOpen] = useState(true);

    
      
    return (
        <Router >
                <div>
                    <div className="navigationbar">
                        <div className="nav-child">
                            <div className="navigationbar-container my-container">
                                <header className="nav-header">
                                    <div className="navigationbar-stack my-stack-one">
            
{/*  using onclick method to change the sidemenuopen value to 'true' when the toggler button clicked*/}
                                        < button onClick={() => setSideMenuOpen(true)} type = "button" className = "navigationbar-button ham-button"  > 
                                            <TogglerButton  />
                                        </button>
                                        <NavBarLinks />
                                        <Spacer />
                                    </div>
                                   
                                            
                                            <NavBarLogo />  
                                            
                                         
                                    
                                    
                                    
                                    <div className="navigationbar-stack my-stack-three">
                                        <div className="search-bar-div">
                                            {
                                               searchBarOpen
                                                ? <SearchBar />
                                                : null
                                            }
                                            {
                                                crossButtonOpen
                                                ? null
                                                : <div onClick={() => {setSearchBarOpen(true);setCrossButtonOpen(true)}}>
                                                <SearchIcon />
                                                </div>
                                            }
                                            
                                            
                                            {
                                                crossButtonOpen
                                                ? <div onClick={() => {setSearchBarOpen(false);setCrossButtonOpen(false)}} ><CrossIcon /></div>
                                                : null
                                            }
                                            
                                        </div>
                                    </div>
                                </header >
                            </div>
                        </div>
                    </div>
                    

                     
 {/*  using conditional statement to open sidemenubar when sidemenuopen value is'true'*/}
  
                    {
                        sideMenuOpen

                                    
                                    ?<div  className="menu">
                                        <div 
                                            className="menu-slide menu-modal__content wef-bfltzr"
                                            role="dialog"
                                            id="menu-modal-1"
                                            tabindex="-1"
                                            aria-modal="true"
                                            aria-describedby="menu-modal--body-1"
                                            style={{position: "fixed", width: "100%" ,height: "100vh", left: "0px", top: "0px", transform: "translateX(0%) translateZ(0px)"}}
                                            >
                                            <div onClick={() => setSideMenuOpen(false)}><MenuCrossIcon /></div>
                                            <div className="menu-modal__body wef-1fibqux" id="menu-modal--body-1">
                                                <div className="wef-0">
                                                <header className="wef-6detrv" onClick={() => setExploreTwoOpen(!exploreTwoOpen)}>
                                                        <h4 className="menu-text wef-1pkwypy" >
                                                            <div className="wef-gg4vpm">
                                                            Explore
                                                                <div >
                                                                    {
                                                                        exploreTwoOpen
                                                                        ?<DropDownIcon />
                                                                        :<DownArrowIcon />
                                                                    }
                                                                    </div>
                                                            </div>
                                                        </h4>
                                                    </header>
                                                    {
                                                        exploreTwoOpen
                                                        ? <ExploreTwo setSideMenuOpen={setSideMenuOpen} />
                                                        :null
                                                    }
                                                </div>
                                                <div className="wef-0">
                                                    
                                                            <header  onClick={() => setExploreOneOpen(!exploreOneOpen)} className="wef-6detrv">
                                                        <h4 className="menu-text wef-1pkwypy">
                                                            <div className="wef-gg4vpm">
                                                                
                                                    Explore more   
                                                                <div>{
                                                                        exploreOneOpen
                                                                        ?<DropDownIcon />
                                                                        :<DownArrowIcon />
                                                                    }</div>
                                                            </div>
                                                        </h4>
                                                    </header>
                                                    {
                                                        exploreOneOpen
                                                        ? <ExploreOne setSideMenuOpen={setSideMenuOpen}/>
                                                        :null
                                                    }
                                                    
                                                </div>
                                                <Forum setSideMenuOpen={setSideMenuOpen} />
                                                <SocialMediaLinks setSideMenuOpen={setSideMenuOpen} />
                                            </div>
                                        </div>
                                    </ div> 
                                    
                                              
                            
                            :null
                    }

                    {
                        sideMenuOpen
                        ?<BackDrop  setSideMenuOpen={setSideMenuOpen}/>
                        : null
                    }
                      
{/* using onclick method to change the sidemenuopen value to 'false' when the backdrop is clicked*/}
                                                       
                        <div className="page-load">
                            <Switch>
                                {/* Home Page */}
                                <Route exact path="/">
                                    <Home/>
                                </Route>

                                <Route exact path="/events">
                                    <Events/>
                                </Route>

                                <Route exact path="/blog">
                                    <Blog/>
                                </Route>

                                <Route exact path="/projects">
                                    <Projects/>
                                </Route>

                                {/* about page */}

                                <Route path="/about" exact>
                                    <About/>
                                </Route>

                                <Route path="/about/mission" exact>
                                    <About/>
                                </Route>

                                <Route path="/about/contact" exact>
                                    <About/>
                                </Route>

                                <Route path="/about/finance" exact>
                                    <About/>
                                </Route>

                                <Route path="/about/governance" exact>
                                    <About/>
                                </Route>

                                <Route path="/about/howwedo" exact>
                                    <About/>
                                </Route>

                                <Route path="/about/whatwedo" exact>
                                    <About/>
                                </Route>

                                <Route path="/about/whoweare" exact>
                                    <About/>
                                </Route>

                                {/* people page */}

                                <Route path="/people" exact>
                                    <People/>
                                </Route>

                                <Route path="/people/careers" exact>
                                    <People/>
                                </Route>

                                <Route path="/people/community" exact>
                                <People/>
                                </Route>

                                <Route path="/people/lifeatftp" exact>
                                <People/>
                                </Route>

                                <Route path="/people/members" exact>
                                <People/>
                                </Route>

                                <Route path="/people/partners" exact>
                                <People/>
                                </Route>
                                {/* operations page*/}
                                <Route path="/operations" exact>
                                    <Operation/>
                                </Route>

                                <Route path="/operations/events" exact>
                                <Operation/>
                                </Route>

                                <Route path="/operations/gallery" exact>
                                <Operation/>
                                </Route>

                                <Route path="/operations/projects" exact>
                                <Operation/>
                                </Route>

                                <Route path="/operations/contact" exact>
                                <Operation/>
                                </Route>

                                {/* report page */}
                                <Route path="/reports" exact>
                                    <Report/>
                                </Route>
                            </Switch>
                    </div>

                </div>
        </Router>
    );
};



export default App;
