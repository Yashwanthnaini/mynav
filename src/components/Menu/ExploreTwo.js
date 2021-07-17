import React from "react";
import {Link} from 'react-router-dom';

const ExploreTwo = ({setSideMenuOpen}) => {
    return(
        <>
            <div
                className="menu-collapse"
                aria-hidden="true"
                style={{overflow: "hidden" ,opacity: "1", height: "auto"}}>
                <div className="menu-stack wef-1br6ptk">
                    <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-nnzi91" to="/events" role="group">
                        <p className="menu-text wef-zcdewt">Events</p>
                    </Link>
                    <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-nnzi91" to="/projects" role="group">
                        <p className="menu-text wef-zcdewt">Projects</p>
                    </Link>
                    <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-nnzi91" to="/blog" role="group">
                        <p className="menu-text wef-zcdewt">Blog</p>
                    </Link>
                    <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-nnzi91" to="/reports" role="group">
                        <p className="menu-text wef-zcdewt">Reports</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ExploreTwo;