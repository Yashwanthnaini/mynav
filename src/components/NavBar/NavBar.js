import React from "react";
import "../../App.css"

//importing search icon from  react icons 
import {FaSearch} from "react-icons/fa";

//import nabbar items from navitem component
import NavItem from "./NavItem";

const NavBar = () => (
    
             
        <div className="nav-menu " style={{
            height: "100%"
        }}>
            <ul >
{/*using props to send information to navitem component */}
                <NavItem name="Home" dir="/"/>
                <NavItem name="About" dir="/about"/>
                <NavItem name="People" dir="/people"/>
                <NavItem name="Operations" dir="/operations"/>
                <NavItem name="Report" dir="/report"/>
                <div className="spacer"/>
               
                <div>
                    <li>
                        <a href="/"><FaSearch className="search-icon"/></a>
                    </li>
                </div>

            </ul>

        </div>
    
);

export default NavBar;