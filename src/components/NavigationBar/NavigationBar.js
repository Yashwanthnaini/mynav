//in this file we imported navbar and sidemenubar in order to get full functioning navigation bar

//importing  states  from react
import React, {useState} from "react";

import "../../App.css";

//importing logo 
import logo from "../../forthepeople.png"

//importing navbar javascript file from navbar component
import NavBar from "../NavBar/NavBar.js"

import SideMenuBar from "../SideMenuBar/SideMenuBar.js";

import TogglerButton from "../SideMenuBar/SideMenuTogglerButton.js";

function NavigationBar () {

//using state to set false value to sidemenuopen variable
    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    return (

        <header className="header-section">
            <nav className="navigation-bar">
                <div className="toggler-button">
{/*using onclick method to change the sidemenuopen value to 'true' when the toggler button clicked */}
                    <button onClick={() => setSideMenuOpen(true)} className="ham-button"><TogglerButton/></button>

                </div>
                <div>
                <a href="/"><img className="nav-icon" src={logo} alt="My logo"/></a>
                </div>
                <NavBar/> 
{/*using conditional statement to open sidemenubar when sidemenuopen value is 'true'   */}
                {
                    sideMenuOpen
                        ? <SideMenuBar/>
                        : null
                }
{/*using onclick method to change the sidemenuopen value to 'false' when the backdrop is clicked  */}
                <div className="backdrop" onClick={() => setSideMenuOpen(false)}></div>

            </nav>
            <div className="line"></div>
        </header>
    );
};

//exporting navigationbar to use it as a component
export default NavigationBar;