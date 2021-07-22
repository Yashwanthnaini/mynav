import React from "react";
import { Link } from "react-router-dom";


const Forum = ({setSideMenuOpen}) => {
    return(
        <>
        <div className="wef-0">
            <header className="wef-6detrv">
                <h4 className="menu-text wef-1pkwypy">
                    <div className="wef-gg4vpm">
                        About Us
                    </div>
                </h4>
            </header>
            <div
                className="menu-collapse"
                aria-hidden="true"
                style={{overflow: "hidden", opacity: "1", height: "auto"}}>
                <div className="menu-stack wef-1br6ptk">
                    <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/about/mission">
                        Our Mission
                    </Link>                                                                
                    <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/partners">Our Partners</Link>
                    <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/governance">
                        Leadership & Governance
                    </Link>  
                    <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-k8q6g0" to="/lifeatftp">
                        Life at FTP
                    </Link>  
                </div>
            </div>
        </div>
        </>
    );
};

export default Forum;