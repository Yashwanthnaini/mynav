import React from "react";
import {Link} from 'react-router-dom';
const AboutUsLinks = ({setSideMenuOpen}) => {
    return(
        <>
        <div
            className="menu-collapse"
            aria-hidden="true"
            style={{overflow: "hidden", opacity: "1", height: "auto"}}>
            <div className="menu-stack wef-1br6ptk">
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/about/mission">Our Mission</Link>
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/about/whoweare">Who We Are</Link>
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/about/whatwedo">What We Do</Link>
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/about/howwedo">How We Do</Link>
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/about/governance">Governance & Leadership</Link>   
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/about/lifeatftp">Life At FTP</Link>                                                           
            </div>
        </div>
        </>
    );
};

export default AboutUsLinks;