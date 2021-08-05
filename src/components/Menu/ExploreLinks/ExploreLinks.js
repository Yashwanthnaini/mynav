import React from "react";
import {Link} from 'react-router-dom';
const ExploreLinks = ({setSideMenuOpen}) => {
    return(
        <>
        <div
            className="menu-collapse"
            aria-hidden="true"
            style={{overflow: "hidden", opacity: "1", height: "auto"}}>
            <div className="menu-stack wef-1br6ptk">
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/explore/blog">Blog</Link>
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/explore/reports">Reports</Link>
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/explore/finance">Financials & Reports</Link>
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/explore/contact">Contact Us</Link>                                                        
            </div>
        </div>
        </>
    );
};

export default ExploreLinks;