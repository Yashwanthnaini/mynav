import React from "react";
import {Link} from 'react-router-dom';
const ExploreOne = ({setSideMenuOpen}) => {
    return(
        <>
        <div
            className="menu-collapse"
            aria-hidden="true"
            style={{overflow: "hidden", opacity: "1", height: "auto"}}>
            <div className="menu-stack wef-1br6ptk">
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-dhwils" to="/about">About</Link>
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-dhwils" to="/people">People</Link>
                <Link onClick={() => setSideMenuOpen(false)} className="menu-link wef-dhwils" to="/operations">Operations</Link>                                                        
            </div>
        </div>
        </>
    );
};

export default ExploreOne;