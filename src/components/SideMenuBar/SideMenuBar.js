import React from "react";
import "../../App.css";
//importing search icon from react icons
import {FaSearch} from "react-icons/fa";

import MenuItem from "./MenuItem.js";

//using props to recieve information from other components
const SideMenuBar = (props) => (
    <nav className="side-menu">

        <div className="search-widget">
            <form action="/search" >

                <input
                    type="text"
                    maxlength="100"
                    size="10"
                    placeholder="Search"
                    className="search-bar"/>
                <button className="form-submit">
                    <FaSearch className="icon"/>
                </button>
            </form>
        </div>

        <ul className="sidenav-items">
            <MenuItem name="Home" dir="/"/>
            <MenuItem name="About" dir="/about"/>
            <MenuItem name="People" dir="/people"/>
            <MenuItem name="Operations" dir="/operations"/>
            <MenuItem name="Reports" dir="/reports"/>
            <div style={{paddingTop: "26px",
    paddingLeft: "19px"}}>
                        <li>
                            <button className="button" >
                                <b>Sign-in</b>
                            </button>
                        </li>
                    </div>
        </ul>

    </nav>
);

export default SideMenuBar;