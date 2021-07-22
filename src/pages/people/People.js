import React ,{useState} from 'react';


import '../css-styles/topbar.css' ;


import { Link } from 'react-router-dom';


import arrow from "../css-styles/images/arrow.png";
import rotated from '../css-styles/images/rotated.png';



import Careers from "./Careers/Career.js"

import Community from "./Communities/Communities.js"

import LifeAtFtp from "./Lifeatftp/Lifeatftp.js"

import Members from "./Members/Member.js"

import Partners from "./Partners/Partner.js"





const People = () => {
    const [imageSrc, setImageSrc] = useState(
        "https://static.wixstatic.com/media/nsplsh_36553541456d5149616a67~mv2_d_4272_28" +
                        "48_s_4_2.jpg/v1/fill/w_1349,h_201,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_36553541" +
                        "456d5149616a67~mv2_d_4272_2848_s_4_2.webp"
    );
    const [imageText, setImageText] = useState("Members");

    const [loadPage,setLoadPage] =useState(<Members />);
    

    const [openDropdown , setOpenDropdown] = useState(false);

    const [arrowSymbol,setArrowSymbol] = useState(arrow)
        
    
    return (
        <> < div className = "Imagebar" > <img src={imageSrc} alt="background"/>
        <ul className="Topbar__links">
            <Link
                to="/people/members"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li onClick={() =>{ setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_36553541456d5149616a67~mv2_d_4272_28" +
                        "48_s_4_2.jpg/v1/fill/w_1349,h_201,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_36553541" +
                        "456d5149616a67~mv2_d_4272_2848_s_4_2.webp"
                    ); setImageText("Members");setLoadPage(<Members />)}}>Members</li>
            </Link>
            <Link
                to="/people/careers"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() =>{ setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_774e7a375f354576555755~mv2_d_6016_40" +
                        "00_s_4_2.jpg/v1/fill/w_1349,h_281,al_t,q_85,usm_0.66_1.00_0.01/nsplsh_774e7a37" +
                        "5f354576555755~mv2_d_6016_4000_s_4_2.webp"
                    ); setImageText("Carrer");setLoadPage(<Careers />)}}>Careers</li>
            </Link>
            <Link
                to="/people/community"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/55b9087be50e46b59051426e1cdd23cb.jpg/v1/fil" +
                        "l/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/55b9087be50e46b59051426e1cdd23cb.w" +
                        "ebp"
                    ); setImageText("Community");setLoadPage(<Community />)}}>Communities</li>
            </Link>
            <Link
                to="/people/partners"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_180cb9475d35470e81293861b8bb812d~mv2" +
                        ".jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_180cb9475d35470e" +
                        "81293861b8bb812d~mv2.webp"
                    ); setImageText("Partners");setLoadPage(<Partners />)}}>Partners</li>
            </Link>
            <Link
                to="/people/lifeatftp"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/8daf94f88f524d8cb168d8004c1fe282.jpg/v1/fil" +
                        "l/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/8daf94f88f524d8cb168d8004c1fe282.w" +
                        "ebp"
                    ); setImageText("Life At FTP");setLoadPage(<LifeAtFtp />)}}>Life At FTP</li>
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
                to="/people/members"
                style={{
                    textDecoration: 'none'
                }}  onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li onClick={() => {setImageSrc(
                       "https://static.wixstatic.com/media/nsplsh_36553541456d5149616a67~mv2_d_4272_28" +
                       "48_s_4_2.jpg/v1/fill/w_1349,h_201,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_36553541" +
                       "456d5149616a67~mv2_d_4272_2848_s_4_2.webp"
                    );
                    setImageText("Members");setLoadPage(<Members />)}}>Members</li>
            </Link>
            <Link
                to="/people/careers"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li  onClick={() =>{ setImageSrc(
                         "https://static.wixstatic.com/media/nsplsh_774e7a375f354576555755~mv2_d_6016_40" +
                         "00_s_4_2.jpg/v1/fill/w_1349,h_281,al_t,q_85,usm_0.66_1.00_0.01/nsplsh_774e7a37" +
                         "5f354576555755~mv2_d_6016_4000_s_4_2.webp"
                    ); setImageText("Careers");setLoadPage(<Careers />)}}
                 >Careers</li>
            </Link>
            <Link
                to="/people/community"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li 
                onClick={() => {setImageSrc(
                    "https://static.wixstatic.com/media/55b9087be50e46b59051426e1cdd23cb.jpg/v1/fil" +
                        "l/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/55b9087be50e46b59051426e1cdd23cb.w" +
                        "ebp"
                ); setImageText("Community");setLoadPage(<Community />)}} >Community</li>
            </Link>
            <Link
                to="/people/partners"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li 
                onClick={() => {setImageSrc(
                    "https://static.wixstatic.com/media/nsplsh_180cb9475d35470e81293861b8bb812d~mv2" +
                    ".jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_180cb9475d35470e" +
                    "81293861b8bb812d~mv2.webp"
                ); setImageText("Partners");setLoadPage(<Partners />)}}
                >Partners</li>
            </Link>
            <Link
                to="/people/lifeatftp"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false);; setArrowSymbol(arrow)}}>
                <li 
                 onClick={() => {setImageSrc(
                    "https://static.wixstatic.com/media/8daf94f88f524d8cb168d8004c1fe282.jpg/v1/fil" +
                        "l/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/8daf94f88f524d8cb168d8004c1fe282.w" +
                        "ebp"
                ); setImageText("Life At FTP");setLoadPage(<LifeAtFtp />)}}
                >Life At FTP</li>
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

export default People
