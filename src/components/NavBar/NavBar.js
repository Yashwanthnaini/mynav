import React, {useState} from "react";

//importing NavBar Components
import "./NavBar.css";
import CrossIcon from "./CrossIcon/CrossIcon.js";
import NavBarLinks from "./NavBarLinks/NavBarLinks.js";
import NavBarLogo from "./NavBarLogo/NavBarLogo.js";
import SearchBar from "./SearchBar/SearchBar.js";
import SearchIcon from "./SearchIcon/SearchIcon.js";
import Spacer from "./Spacer/Spacer.js";
import TogglerButton from "./TogglerButton/TogglerButton.js"


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
                                                ?< div className = "search-bar-container" >
                                                    <div className="search-bar-child open" >
                                                        <SearchBar />
                                                    </div>
                                                </div>
                                                :< div className = "search-bar-container" >
                                                    <div className="search-bar-child close" >
                                                        <SearchBar />
                                                    </div>
                                                </div>
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