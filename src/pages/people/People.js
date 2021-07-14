import React from 'react';
import '../css-styles/topbar.css' ;
import { Link } from 'react-router-dom';
import arrow from "../css-styles/images/arrow.png";
import rotated from '../css-styles/images/rotated.png';
function People() {

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
                <img src="https://static.wixstatic.com/media/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.jpg/v1/fill/w_1349,h_201,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.webp" alt="background" />
                <ul className="Topbar__links">
                    <Link to="/people/member" style={{ textDecoration: 'none', color: 'white' }}>
                        <li >Members</li>
                    </Link>
                    <Link to="/people/career" style={{ textDecoration: 'none', color: 'white' }}>
                        <li  >Careers</li>
                    </Link>
                    <Link to="/people/community" style={{ textDecoration: 'none', color: 'white' }}>
                        <li  >Communities</li>
                    </Link>
                    <Link to="/people/partner" style={{ textDecoration: 'none', color: 'white' }}>
                        <li  >Partners</li>
                    </Link>
                    <Link to="/people/lifeatftp" style={{ textDecoration: 'none', color: 'white' }}>
                        <li  >Life at FTP</li>
                    </Link>
                   
                </ul>
                <span>Members</span>
            </div>

            {/* Dropdown Bar */}
            <p onClick={() => hideBar()} className="selected"><span className="text">Members</span><span><img src={arrow} alt={arrow} id="image" /></span></p>
            <ul className="dropdown__menu" >
                <Link to="/people/member" style={{ textDecoration: 'none' }}>
                    <li  >Members</li>
                </Link>
                <Link to="/people/career" style={{ textDecoration: 'none' }}>
                    <li >Careers</li>
                </Link>
                <Link to="/people/community" style={{ textDecoration: 'none' }}>
                    <li  >Communities</li>
                </Link>
                <Link to="/people/partner" style={{ textDecoration: 'none' }}>
                    <li  >Partners</li>
                </Link>
                <Link to="/people/lifeatftp" style={{ textDecoration: 'none' }}>
                    <li  >Life at FTP</li>
                </Link>
            </ul>

        </>
    )
}

export default People
