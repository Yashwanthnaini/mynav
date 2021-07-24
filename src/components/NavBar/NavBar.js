import React, {useState} from "react";

//importing NavBar Components
import "./NavBar.css";
import CrossIcon from "./CrossIcon.js";
import NavBarLinks from "./NavBarLinks.js";
import NavBarLogo from "./NavBarLogo.js";
import SearchBar from "./SearchBar.js";
import SearchIcon from "./SearchIcon.js";
import Spacer from "./Spacer.js";
import TogglerButton from "./TogglerButton.js"


const NavBar = ({setSideMenuOpen}) => {
    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const [crossButtonOpen, setCrossButtonOpen] = useState(false);
    return(
        <>
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
        </>
    )
}

export default NavBar;