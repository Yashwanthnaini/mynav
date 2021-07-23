import React , {useState}   from 'react';


import "../StylesCSS/pages.css" ;


import { Link } from 'react-router-dom';


import arrow from "../StylesCSS/images/arrow.png";
import rotated from '../StylesCSS/images/rotated.png';


import Community from "./Community/Community.js";

import Finance from "./Finance/Finance.js";

import HowWeDo from "./HowWeDo/HowWeDo.js";

import People from "./People/People.js";

import WhatWeDo from "./WhatWeDo/WhatWeDo.js";

import WhoWeAre from "./WhoWeAre/WhoWeAre.js";



const Communities = () => {

    const [imageSrc, setImageSrc] = useState(
        "https://static.wixstatic.com/media/55b9087be50e46b59051426e1cdd23cb.jpg/v1/fil" +
                        "l/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/55b9087be50e46b59051426e1cdd23cb.w" +
                        "ebp"
    );
    const [imageText, setImageText] = useState("Communities");

    const [loadPage,setLoadPage] =useState(<Community/>);

    const [openDropdown , setOpenDropdown] = useState(false);

    const [arrowSymbol,setArrowSymbol] = useState(arrow)
   
   
   
         
    return (
        <> < div className = "Imagebar" > <img src={imageSrc} alt="background"/>
        <ul className="Topbar__links">
            <Link
                to="/communities"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/55b9087be50e46b59051426e1cdd23cb.jpg/v1/fil" +
                        "l/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/55b9087be50e46b59051426e1cdd23cb.w" +
                        "ebp"
                    );
                    setImageText("Communities");setLoadPage(<Community />)}}>Communities</li>
            </Link>
            <Link
                to="/communities/people"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() =>{ setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_536d345446453778744451~mv2_d_6000_45" +
                        "00_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_536d3454" +
                        "46453778744451~mv2_d_6000_4500_s_4_2.webp"
                    ); setImageText("People");setLoadPage(<People />)}}>People</li>
            </Link>
            <Link
                to="/communities/finance"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/84770f_5251001816154d3d9e793f346f9eca55~mv2" +
                        "_d_5472_3648_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/84770" +
                        "f_5251001816154d3d9e793f346f9eca55~mv2_d_5472_3648_s_4_2.webp"
                    ); setImageText("Finance");setLoadPage(<Finance />)}}>Finance</li>
            </Link>
            <Link
                to="/communities/whoweare"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_fc8662d44f00446cbf9dbdefaace46e2~mv2" +
                        ".jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_fc8662d44f00446c" +
                        "bf9dbdefaace46e2~mv2.webp"
                    ); setImageText("Who we are");setLoadPage(<WhoWeAre />)}}>Who we are</li>
            </Link>
            <Link
                to="/communities/whatwedo"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_a16cbc9d8b944a2cb14aedf58a0afa1d~mv2" +
                        ".jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_a16cbc9d8b944a2c" +
                        "b14aedf58a0afa1d~mv2.webp"
                    ); setImageText("What we do");setLoadPage(<WhatWeDo />)}}>What we do</li>
            </Link>
        
            <Link
                to="/communities/howwedo"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_c9b625629d2743c987629d9db3939846~mv2" +
                        ".jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_c9b625629d2743c9" +
                        "87629d9db3939846~mv2.webp"
                    ); setImageText("How we do");setLoadPage(<HowWeDo />)}}>How we do</li>
            </Link>
            
            
            
        </ul>
        <span>{imageText}</span>
    </div>

           {/* Dropdown Bar */
        } < p style={{
            boxSizing: "unset",
        }} onClick = {

            () => {
               if(openDropdown){
                setOpenDropdown(false);
                }
                else{
                    setOpenDropdown(true);
                };
                if(openDropdown){
                    setArrowSymbol(arrow);
                }
                else{
                    setArrowSymbol(rotated);
                }
                
                
            }
        }
        className = "selected" > <span className="text">{imageText}</span>
        <span ><img src={arrowSymbol} alt={arrowSymbol} id="image"/></span>
    </p>
    {
        openDropdown
            ? <ul className="dropdown__menu">
            <Link
                to="/communities"
                style={{
                    textDecoration: 'none'
                }}  onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li onClick={() => {setImageSrc(
                       "https://static.wixstatic.com/media/55b9087be50e46b59051426e1cdd23cb.jpg/v1/fil" +
                       "l/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/55b9087be50e46b59051426e1cdd23cb.w" +
                       "ebp"
                    );
                    setImageText("Communities");setLoadPage(<Community />)}}>Communities</li>
            </Link>
            <Link
                to="/communities/people"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li  onClick={() =>{ setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_536d345446453778744451~mv2_d_6000_45" +
                        "00_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_536d3454" +
                        "46453778744451~mv2_d_6000_4500_s_4_2.webp"
                    ); setImageText("People");setLoadPage(<People />)}}
                 >People</li>
            </Link>
            <Link
                to="/communities/finance"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li 
                onClick={() => {setImageSrc(
                    "https://static.wixstatic.com/media/84770f_5251001816154d3d9e793f346f9eca55~mv2" +
                        "_d_5472_3648_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/84770" +
                        "f_5251001816154d3d9e793f346f9eca55~mv2_d_5472_3648_s_4_2.webp"
                );  setImageText("Finance");setLoadPage(<Finance />)}}>Finance</li>
            </Link>
            <Link
                to="/communities/whoweare"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li 
                onClick={() => {setImageSrc(
                    "https://static.wixstatic.com/media/nsplsh_fc8662d44f00446cbf9dbdefaace46e2~mv2" +
                        ".jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_fc8662d44f00446c" +
                        "bf9dbdefaace46e2~mv2.webp"
                );  setImageText("Who we are");setLoadPage(<WhoWeAre />)}}>Who we are</li>
            </Link>
            <Link
                 to="/communities/whatwedo"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li 
                onClick={() => {setImageSrc(
                    "https://static.wixstatic.com/media/nsplsh_a16cbc9d8b944a2cb14aedf58a0afa1d~mv2" +
                    ".jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_a16cbc9d8b944a2c" +
                    "b14aedf58a0afa1d~mv2.webp"
                );  setImageText("What we do");setLoadPage(<WhatWeDo />)}}>What we do</li>
            </Link>
            <Link
                to="/communities/howwedo"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li 
                onClick={() => {setImageSrc(
                    "https://static.wixstatic.com/media/nsplsh_c9b625629d2743c987629d9db3939846~mv2" +
                        ".jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_c9b625629d2743c9" +
                        "87629d9db3939846~mv2.webp"
                );  setImageText("How we do");setLoadPage(<HowWeDo />)}}>How we do</li>
            </Link>
            
            
            
            
    
        </ul>
        : null

    }
            <div>
        {loadPage}
    </div>
        </>
    )
}

export default Communities;
