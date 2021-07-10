import React from "react";
import { Link } from 'react-router-dom';

//using props to recieve information from other components
const NavItem = (props) => (
    <div className="div_hover">
                        <li>
                            <Link to={props.dir}>
                                <b onclionClick="document.location.href='../../pages/Home/Home.js';">{props.name}</b>
                            </Link>
                        </li>
    </div>
);

export default NavItem;