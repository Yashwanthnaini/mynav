//importing  states  from react
import React, {useState} from "react";
import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom';


//importing NavBar Components
import NavBar from "./components/NavBar/NavBar.js";

//importing Menubar components
import MenuBar from "./components/Menu/MenuBar.js";
import BackDrop from "./components/Menu/BackDrop/BackDrop.js";

//import Footer Components 

import Footer from "./components/Footer/Footer.js";

//importing Mypages components
import MyPages from "./mypages/MyPages.js";



const App = () => {

    //using state to set false value to sidemenuopen variable
    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    return (
        <Router >
            <div>
                <NavBar setSideMenuOpen={setSideMenuOpen} />
{/*  using conditional statement to open sidemenubar when sidemenuopen value is'true'*/}
                {
                    sideMenuOpen
                    ?<div  className="menu  "  >
                        <div 
                            className="menu-slide open menu-modal__content wef-bfltzr "
                            role="dialog"
                            id="menu-modal-1"
                            tabIndex="-1"
                            aria-modal="true"
                            aria-describedby="menu-modal--body-1"
                            style={{position: "fixed", width: "100%" ,height: "100vh", left: "0px", top: "0px"}}
                        >
                            <MenuBar 
                                setSideMenuOpen={setSideMenuOpen}
                        
                            />
                        </div>
                     </div>
                    :<div  className="menu  "  >
                        <div 
                            className="menu-slide close menu-modal__content wef-bfltzr "
                            role="dialog"
                            id="menu-modal-1"
                            tabIndex="-1"
                            aria-modal="true"
                            aria-describedby="menu-modal--body-1"
                            style={{position: "fixed",height: "100vh", left: "0px", top: "0px"}}
                        >
                            <MenuBar 
                                setSideMenuOpen={setSideMenuOpen}
                        
                            />
                        </div>
                    </div>
                } 
                {
                    sideMenuOpen
                    ?<BackDrop  setSideMenuOpen={setSideMenuOpen}/>
                    : null
                }
                      
{/* using onclick method to change the sidemenuopen value to 'false' when the backdrop is clicked*/}
                                                       
                <div className="page-load" >
                    <MyPages />
                </div>
                <Footer />
            </div>
        </Router>
    );
};



export default App;
