import React , {useState}   from 'react';


import "./People.css" ;


import { Link } from 'react-router-dom';


import arrow from "../StylesCSS/images/arrow.png";
import rotated from '../StylesCSS/images/rotated.png';


import Members from "./Members/Members.js";

import Careers from "./Careers/Careers.js";

import Communities from "./Communities/Communities.js";

import Partners from "./Partners/Partners.js";

import LifeAtFTP from "./LifeAtFTP/LifeAtFTP.js";







const People = () => {

    const [imageSrc, setImageSrc] = useState(
        "https://static.wixstatic.com/media/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.jpg/v1/fill/w_1349,h_201,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.webp"
    );
    const [imageText, setImageText] = useState("Members");

    const [loadPage,setLoadPage] =useState(<Members/>);

    const [openDropdown , setOpenDropdown] = useState(false);

    const [arrowSymbol,setArrowSymbol] = useState(arrow)
   
    const [underLine,setUnderLine] = useState("members");
   
   
         
    return (
        <> < div className = "People-Imagebar" > <img className="People-Imagebar-image" style={{width: "100%",
        height: "286px",
        objectFit: "cover",
        
            }} src={imageSrc} alt="background"/>
        <ul className="People-Topbar__links">
            <Link
                to="/people/members"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.jpg/v1/fill/w_1349,h_201,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.webp"
                    );
                    setImageText("Members");setLoadPage(<Members />);setUnderLine("members")}}>Members</li>
                    {
                        underLine==="members"
                        ?<div>
                            <hr style={{
                                marginTop: "30px",
                                borderTop: "5px solid #10578B"
                            }}></hr>
                         </div>
                        :""
                    }
            </Link>
            <Link
                to="/people/careers"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_774e7a375f354576555755~mv2_d_6016_4000_s_4_2.jpg/v1/fill/w_1349,h_281,al_t,q_85,usm_0.66_1.00_0.01/nsplsh_774e7a375f354576555755~mv2_d_6016_4000_s_4_2.webp"
                    ); setImageText("Careers");setLoadPage(<Careers />);setUnderLine("careers")}}>Careers</li>
                    {
                        underLine==="careers"
                        ?<div>
                            <hr style={{
                                marginTop: "30px",
                                borderTop: "5px solid #10578B"
                            }}></hr>
                         </div>
                        :""
                    }
            </Link>
            <Link
                to="/people/communities"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/55b9087be50e46b59051426e1cdd23cb.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/55b9087be50e46b59051426e1cdd23cb.webp"
                    ); setImageText("Communities");setLoadPage(<Communities />);setUnderLine("communities")}}>Communities</li>
                    {
                        underLine==="communities"
                        ?<div>
                            <hr style={{
                                marginTop: "30px",
                                borderTop: "5px solid #10578B"
                            }}></hr>
                         </div>
                        :""
                    }
            </Link>
        
            <Link
                to="/people/partners"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_180cb9475d35470e81293861b8bb812d~mv2.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_180cb9475d35470e81293861b8bb812d~mv2.webp"
                    ); setImageText("Partners");setLoadPage(<Partners />);setUnderLine("partners")}}>Partners</li>
                    {
                        underLine==="partners"
                        ?<div>
                            <hr style={{
                                marginTop: "30px",
                                borderTop: "5px solid #10578B"
                            }}></hr>
                         </div>
                        :""
                    }
            </Link>
            <Link
                to="/people/lifeatftp"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    onClick={() =>{ setImageSrc(
                        "https://static.wixstatic.com/media/8daf94f88f524d8cb168d8004c1fe282.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/8daf94f88f524d8cb168d8004c1fe282.webp"

                    ); setImageText("Life at FTP");setLoadPage(<LifeAtFTP />);setUnderLine("lifeatftp")}}>Life at FTP</li>
                    {
                        underLine==="lifeatftp"
                        ?<div>
                            <hr style={{
                                marginTop: "30px",
                                borderTop: "5px solid #10578B"
                            }}></hr>
                         </div>
                        :""
                    }
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
                    textDecoration: 'none',
                    
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.webp"
                    );
                    setImageText("Members");setLoadPage(<Members />)}}>Members</li>
            </Link>
            <Link
                to="/people/careers"
                style={{
                    textDecoration: 'none',
                   
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_774e7a375f354576555755~mv2_d_6016_4000_s_4_2.jpg/v1/fill/w_640,h_450,al_t,q_80,usm_0.66_1.00_0.01/nsplsh_774e7a375f354576555755~mv2_d_6016_4000_s_4_2.webp"
                    ); setImageText("Careers");setLoadPage(<Careers />)}}>Careers</li>
            </Link>
            <Link
                to="/people/communities"
                style={{
                    textDecoration: 'none',
                   
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/55b9087be50e46b59051426e1cdd23cb.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/55b9087be50e46b59051426e1cdd23cb.webp"
                    ); setImageText("Communities");setLoadPage(<Communities />)}}>Communities</li>
            </Link>
        
            <Link
                to="/people/partners"
                style={{
                    textDecoration: 'none',
                    
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                <li
                    onClick={() => {setImageSrc(
                        "https://static.wixstatic.com/media/nsplsh_180cb9475d35470e81293861b8bb812d~mv2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_180cb9475d35470e81293861b8bb812d~mv2.webp"
                    ); setImageText("Partners");setLoadPage(<Partners />)}}>Partners</li>
            </Link>
            <Link
                to="/people/lifeatftp"
                style={{
                    textDecoration: 'none',
                    
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                <li
                    onClick={() =>{ setImageSrc(
                        "https://static.wixstatic.com/media/8daf94f88f524d8cb168d8004c1fe282.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/8daf94f88f524d8cb168d8004c1fe282.webp"

                    ); setImageText("Life at FTP");setLoadPage(<LifeAtFTP />)}}>Life at FTP</li>
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

export default People;
