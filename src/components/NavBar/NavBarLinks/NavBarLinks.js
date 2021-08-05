import React from "react";
import {Link} from 'react-router-dom';
const NavBarLinks = () => {
    
    return (
        <> 
            < div className = "links" > 
                <nav className="navigationbar-stack my-stack-two">
                    <Link className="navigationbar-link link-item" to="/operations/events">Operations</Link>
                    <Link className="navigationbar-link link-item" to="/explore/blog">Explore</Link>
                    <Link className="navigationbar-link link-item" to="/becomeapart/partners">Become a Part</Link>
                    <Link className="navigationbar-link link-item" to="/about/mission">About Us</Link>
                </nav>
            </div>
</>
    )
};

export default NavBarLinks;