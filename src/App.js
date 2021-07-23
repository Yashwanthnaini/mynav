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
import Home from "./mypages/Home/Home.js";


//report page
import Report from "./mypages/Reports/Report.js"

import Blog from "./mypages/Blog/Blog.js";



import Events from "./mypages/Events/Events.js";

import Projects from "./mypages/Projects/Projects.js";

import Careers from "./mypages/Careers/Careers.js";

import Communities from "./mypages/Communities/Communities.js";

import ContactUs from "./mypages/ConatctUs/ContactUs.js";

import Partners from "./mypages/OurPartners/OurPartners.js";

import LifeAtFTP from "./mypages/LifeAtFTP/LifeAtFTP.js";

import LAndG from "./mypages/LAndG/LAndG.js";

import OurMission from "./mypages/OurMission/OurMission.js";


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

                               

                                <Route exact path="/blog">
                                    <Blog/>
                                </Route>

                                

                               

                               
                                {/* events page*/}
                                <Route path="/events" exact>
                                    <Events />
                                </Route>
                                <Route path="/events/people" exact>
                                    <Events />
                                </Route>
                                <Route path="/events/howwedo" exact>
                                    <Events />
                                </Route>
                                <Route path="/events/finance" exact>
                                    <Events />
                                </Route>
                                <Route path="/events/whatwedo" exact>
                                    <Events />
                                </Route>
                                <Route path="/events/whoweare" exact>
                                    <Events />
                                </Route>

                                {/* projects page */}
                                <Route exact path="/projects">
                                    <Projects/>
                                </Route>
                                <Route exact path="/projects/people">
                                    <Projects/>
                                </Route>
                                <Route exact path="/projects/finance">
                                    <Projects/>
                                </Route>
                                <Route exact path="/projects/whoweare">
                                    <Projects/>
                                </Route>
                                <Route exact path="/projects/whatwedo">
                                    <Projects/>
                                </Route>
                                <Route exact path="/projects/howwedo">
                                    <Projects/>
                                </Route>
                                
                                {/* career page */}
                                <Route exact path="/careers">
                                    <Careers/>
                                </Route>
                                <Route exact path="/careers/people">
                                    <Careers/>
                                </Route>
                                <Route exact path="/careers/finance">
                                    <Careers/>
                                </Route>
                                <Route exact path="/careers/whoweare">
                                    <Careers/>
                                </Route>
                                <Route exact path="/careers/whatwedo">
                                    <Careers/>
                                </Route>    
                                <Route exact path="/careers/howwedo">
                                    <Careers/>
                                </Route>

                                {/* Communities page */}
                                <Route exact path="/communities">
                                <Communities/>
                                </Route>
                                <Route exact path="/communities/people">
                                <Communities/>
                                </Route>
                                <Route exact path="/communities/finance">
                                <Communities/>
                                </Route>
                                <Route exact path="/communities/whoweare">
                                <Communities/>
                                </Route>
                                <Route exact path="/communities/whatwedo">
                                <Communities/>
                                </Route>
                                <Route exact path="/communities/howwedo">
                                    <Communities/>
                                </Route>

                                {/* Contact page */}
                                <Route exact path="/contacts">
                                    <ContactUs/>
                                </Route>
                                <Route exact path="/contacts/people">
                                    <ContactUs/>
                                </Route>
                                <Route exact path="/contacts/finance">
                                    <ContactUs/>
                                </Route>
                                <Route exact path="/contacts/whoweare">
                                <ContactUs/>
                                </Route>
                                <Route exact path="/contacts/whatwedo">
                                <ContactUs/>
                                </Route>
                                <Route exact path="/contacts/howwedo">
                                <ContactUs/>
                                </Route>

                                {/* Our partners page */}
                                <Route exact path="/about/partners">
                                <Partners />
                                </Route>
                                <Route exact path="/about/partners/people">
                                <Partners />
                                </Route>
                                <Route exact path="/about/partners/finance">
                                <Partners />
                                </Route>
                                <Route exact path="/about/partners/whoweare">
                                <Partners />
                                </Route>
                                <Route exact path="/about/partners/whatwedo">
                                <Partners />
                                </Route>
                                <Route exact path="/about/partners/howwedo">
                                <Partners />
                                </Route>

                                {/* Life at fta page */}
                                <Route exact path="/about/lifeatftp">
                                <LifeAtFTP />
                                </Route>
                                <Route exact path="/about/lifeatftp/howwedo">
                                <LifeAtFTP />
                                </Route>
                                <Route exact path="/about/lifeatftp/people">
                                <LifeAtFTP />
                                </Route>
                                <Route exact path="/about/lifeatftp/finance">
                                <LifeAtFTP />
                                </Route>
                                <Route exact path="/about/lifeatftp/whoweare">
                                <LifeAtFTP />
                                </Route>
                                <Route exact path="/about/lifeatftp/whatwedo">
                                <LifeAtFTP />
                                </Route>

                                {/* leadership and governance page */}
                                <Route exact path="/about/governance">
                                <LAndG />
                                </Route>
                                <Route exact path="/about/governance/people">
                                <LAndG />
                                </Route>
                                <Route exact path="/about/governance/finance">
                                <LAndG />
                                </Route>
                                <Route exact path="/about/governance/whoweare">
                                <LAndG />
                                </Route>
                                <Route exact path="/about/governance/whatwedo">
                                <LAndG />
                                </Route>
                                <Route exact path="/about/governance/howwedo">
                                <LAndG />
                                </Route>
                                
                                {/* our mission page */}
                                <Route exact path="/about/missions">
                                <OurMission />
                                </Route>

                                <Route exact path="/about/missions/people">
                                <OurMission />
                                </Route>

                                <Route exact path="/about/missions/finance">
                                <OurMission />
                                </Route>

                                <Route exact path="/about/missions/whoweare">
                                <OurMission />
                                </Route>

                                <Route exact path="/about/missions/whatwedo">
                                <OurMission />
                                </Route>

                                <Route exact path="/about/missions/howwedo">
                                <OurMission />
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
