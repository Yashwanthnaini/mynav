import React , {useState}   from 'react';


import '../css-styles/topbar.css' ;


import { Link } from 'react-router-dom';


import arrow from "../css-styles/images/arrow.png";
import rotated from '../css-styles/images/rotated.png';


import Events from "./Events/Events.js"

import Gallery from "./Gallery/Gallery.js"

import Projects from "./Projects/Projects.js"

import Contact from "./Contactus/Contacts.js"

const Operation = () => {

    const [imageSrc, setImageSrc] = useState(
        "https://static.wixstatic.com/media/nsplsh_63583276456c513561486b~mv2_d_5860_39" +
                        "12_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_63583276" +
                        "456c513561486b~mv2_d_5860_3912_s_4_2.webp"
    );
    const [imageText, setImageText] = useState("Events");

    const [loadPage,setLoadPage] =useState(<Events/>);

    const [openDropdown , setOpenDropdown] = useState(false);

    const [arrowSymbol,setArrowSymbol] = useState(arrow)
   
   
   
         
    return (
        <> < div className = "Imagebar" > <img src={imageSrc} alt="background"/>
        <ul className="Topbar__links">
            <Link
                to="/operations/events"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_63583276456c513561486b~mv2_d_5860_39" +
                        "12_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_63583276" +
                        "456c513561486b~mv2_d_5860_3912_s_4_2.webp"
                    );
                    setImageText("Events");setLoadPage(<Events />)}}>Events</li>
            </Link>
            <Link
                to="/operations/projects"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() =>{ setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_6232315479333343715673~mv2_d_6000_40" +
                        "00_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_62323154" +
                        "79333343715673~mv2_d_6000_4000_s_4_2.webp"
                    ); setImageText("Projects");setLoadPage(<Projects />)}}>Projects</li>
            </Link>
            <Link
                to="/operations/gallery"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_536d345446453778744451~mv2_d_6000_45" +
                        "00_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_536d3454" +
                        "46453778744451~mv2_d_6000_4500_s_4_2.webp"
                    ); setImageText("Gallery");setLoadPage(<Gallery />)}}>Gallery</li>
            </Link>
            <Link
                to="/operations/contact"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/84770f_5251001816154d3d9e793f346f9eca55~mv2" +
                        "_d_5472_3648_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/84770" +
                        "f_5251001816154d3d9e793f346f9eca55~mv2_d_5472_3648_s_4_2.webp"
                    ); setImageText("Contact Us");setLoadPage(<Contact />)}}>Contact Us</li>
            </Link>
        
        </ul>
        <span>{imageText}</span>
    </div>

           {/* Dropdown Bar */
        } < p onClick = {

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
        className = "selected" > <span className="text">Operations</span>
        <span ><img src={arrowSymbol} alt={arrowSymbol} id="image"/></span>
    </p>
    {
        openDropdown
            ? <ul className="dropdown__menu">
            <Link
                to="/operations/events"
                style={{
                    textDecoration: 'none'
                }}  onClick={() => setOpenDropdown(false)}>
                <li onClick={() => {setImageSrc(
                       "https://static.wixstatic.com/media/nsplsh_63583276456c513561486b~mv2_d_5860_39" +
                       "12_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_63583276" +
                       "456c513561486b~mv2_d_5860_3912_s_4_2.webp"
                    );
                    setImageText("Events");setLoadPage(<Events />)}}>Events</li>
            </Link>
            <Link
                to="/operations/projects"
                style={{
                    textDecoration: 'none'
                }} onClick={() => setOpenDropdown(false)}>
                <li  onClick={() =>{ setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_6232315479333343715673~mv2_d_6000_40" +
                        "00_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_62323154" +
                        "79333343715673~mv2_d_6000_4000_s_4_2.webp"
                    ); setImageText("Projects");setLoadPage(<Projects />)}}
                 >Projects</li>
            </Link>
            <Link
                to="/operations/gallery"
                style={{
                    textDecoration: 'none'
                }} onClick={() => setOpenDropdown(false)}>
                <li 
                onClick={() => {setImageSrc(
                    "https://static.wixstatic.com/media/nsplsh_a16cbc9d8b944a2cb14aedf58a0afa1d~mv2" +
                    ".jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_a16cbc9d8b944a2c" +
                    "b14aedf58a0afa1d~mv2.webp"
                ); setImageText("Gallery");setLoadPage(<Gallery />)}} >Gallery</li>
            </Link>
            <Link
                to="/operations/contact"
                style={{
                    textDecoration: 'none'
                }} onClick={() => setOpenDropdown(false)}>
                <li 
                onClick={() => {setImageSrc(
                    "https://static.wixstatic.com/media/84770f_5251001816154d3d9e793f346f9eca55~mv2" +
                        "_d_5472_3648_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/84770" +
                        "f_5251001816154d3d9e793f346f9eca55~mv2_d_5472_3648_s_4_2.webp"
                ); setImageText("Contact");setLoadPage(<Contact />)}}
                >Contact</li>
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

export default Operation
