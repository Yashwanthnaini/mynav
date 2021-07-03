import React from "react";

//using props to recieve information from other components
const NavItem = (props) => (
    <div className="div_hover">
                        <li>
                            <a href={props.dir}>
                                <b>{props.name}</b>
                            </a>
                        </li>
    </div>
);

export default NavItem;