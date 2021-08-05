import React from "react";
import {Link} from 'react-router-dom';
const BecomeAPartLinks = ({setSideMenuOpen}) => {
    return(
        <>
        <div
            className="menu-collapse"
            aria-hidden="true"
            style={{overflow: "hidden", opacity: "1", height: "auto"}}>
            <div className="menu-stack wef-1br6ptk">
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/becomeapart/partners">Partners</Link>
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/becomeapart/communities">Communities</Link>
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/becomeapart/careers">Careers</Link>                                                                      
            </div>
        </div>
        </>
    );
};

export default BecomeAPartLinks;