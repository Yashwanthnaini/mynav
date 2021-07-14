import React from 'react';
import '../css-styles/topbar.css' ;
import { Link } from 'react-router-dom';
import arrow from "../css-styles/images/arrow.png";
import rotated from '../css-styles/images/rotated.png';
function Operation() {

    // ** Add Border to selected one
    function addBorder(event) {
        let allLinks = document.querySelectorAll(".Imagebar ul li");
        for (let i = 0; i < allLinks.length; i++) {
            allLinks[i].style.border = "none";
        }
        event.target.style.borderBottom = "3.5px solid #045184";
    }
    // **** hiddencolor****
    function hidebarandchangetext(event) {
        // To show present link         
        let allNodes = document.querySelectorAll(".dropdown__menu li");
        for (let i = 0; i < allNodes.length; i++) {
            allNodes[i].style.color = "#10578B";
        }

        event.target.style.color = "black";
        let image = document.getElementById('image');
        image.src = `${arrow}`;
        let p = document.querySelector('.text');
        let menu = document.querySelector('.dropdown__menu');
        p.innerHTML = event.target.innerText
        menu.style.display = "none";
    }
    // Hidebar
    function hideBar(e) {
        let bar = document.querySelector('.dropdown__menu');
        let image = document.getElementById('image');
        if (bar.style.display === "none") {
            bar.style.display = "block"
            image.src = `${rotated}`
        }
        else {
            bar.style.display = "none"
            image.src = `${arrow}`
        }
    }
   
         
    return (
        <>
            <div className="Imagebar">
                <img src="https://static.wixstatic.com/media/nsplsh_63583276456c513561486b~mv2_d_5860_3912_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_63583276456c513561486b~mv2_d_5860_3912_s_4_2.webp" alt="background" />
                <ul className="Topbar__links">
                    <Link to="/operations/events" style={{ textDecoration: 'none', color: 'white' }}>
                        <li >Events</li>
                    </Link>
                    <Link to="/operations/projects" style={{ textDecoration: 'none', color: 'white' }}>
                        <li  >Projects</li>
                    </Link>
                    <Link to="/operations/gallery" style={{ textDecoration: 'none', color: 'white' }}>
                        <li  >Gallery</li>
                    </Link>
                    <Link to="/operations/contacts" style={{ textDecoration: 'none', color: 'white' }}>
                        <li  >Contact us</li>
                    </Link>
                </ul>
                <span>Events</span>
            </div>

            {/* Dropdown Bar */}
            <p onClick={() => hideBar()} className="selected"><span className="text">Events</span><span><img src={arrow} alt={arrow} id="image" /></span></p>
            <ul className="dropdown__menu" >
                <Link to="/operations/events" style={{ textDecoration: 'none' }}>
                    <li  >Events</li>
                </Link>
                <Link to="/operations/projects" style={{ textDecoration: 'none' }}>
                    <li >Projects</li>
                </Link>
                <Link to="/operations/gallery" style={{ textDecoration: 'none' }}>
                    <li  >Gallery</li>
                </Link>
                <Link to="/operations/contacts" style={{ textDecoration: 'none' }}>
                    <li  >Contact us</li>
                </Link>
            </ul>

        </>
    )
}

export default Operation
