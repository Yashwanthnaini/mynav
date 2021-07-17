import React from "react";
import {Link} from 'react-router-dom';
const NavBarLinks = () => {
    return (
        <> 
            < div className = "links" > 
                <nav className="navigationbar-stack my-stack-two">
                    <Link className="navigationbar-link link-item" to="/events">Events</Link>
                    <Link className="navigationbar-link link-item" to="/projects">Projects</Link>
                    <Link className="navigationbar-link link-item" to="/blog">Blog</Link>
                    <Link className="navigationbar-link link-item" to="/reports">Reports</Link>
                </nav>
            </div>
</>
    )
};

export default NavBarLinks;