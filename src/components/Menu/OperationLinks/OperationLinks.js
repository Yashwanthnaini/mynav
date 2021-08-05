import React from "react";
import {Link} from 'react-router-dom';
const OperationLinks = ({setSideMenuOpen}) => {
    return(
        <>
        <div
            className="menu-collapse"
            aria-hidden="true"
            style={{overflow: "hidden", opacity: "1", height: "auto"}}>
            <div className="menu-stack wef-1br6ptk">
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/operations/events">Events</Link>
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/operations/projects">Projects</Link>
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/operations/gallery">Gallery</Link>                       
            </div>
        </div>
        </>
    );
};

export default OperationLinks;