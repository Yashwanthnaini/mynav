import React from "react";
import Logo from "./Logo/forthepeoplengo2.png";

const NavBarLinks = () => {
    return(
        <>
            <a className="navigationbar-link nav-logo" href="/" >
                        
                <img className="image-icon" src={Logo} alt="nav logo"/>
                        
            </a>
        </>
    )
};

export default NavBarLinks;