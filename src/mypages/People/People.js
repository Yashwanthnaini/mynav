import React , {useState}   from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
        <> 
        < div className = "People-Imagebar" > 
           <Switch>
                <Route exact path="/people/members">
                    <img 
                        className="People-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc} alt="background"
                            onLoad={() =>{
                                setImageText("Members");
                                setLoadPage(<Members />);
                                setUnderLine("members");
                                if(window.innerWidth>500){
                                    setImageSrc(
                                        "https://static.wixstatic.com/media/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.jpg/v1/fill/w_1349,h_201,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.webp"
                                    )
                                }
                                else{
                                    setImageSrc(
                                        "https://static.wixstatic.com/media/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.webp"
                                    )
                                }
                            }}
                    />
                
                
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/people/careers">
                    <img 
                        className="People-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc} alt="background"
                            onLoad={() =>{
                                setImageText("Careers");
                                setLoadPage(<Careers />);
                                setUnderLine("careers");
                                if(window.innerWidth>500){
                                    setImageSrc(
                                        "https://static.wixstatic.com/media/nsplsh_774e7a375f354576555755~mv2_d_6016_4000_s_4_2.jpg/v1/fill/w_1349,h_281,al_t,q_85,usm_0.66_1.00_0.01/nsplsh_774e7a375f354576555755~mv2_d_6016_4000_s_4_2.webp"
                                    )
                                }
                                else{
                                    setImageSrc(
                                        "https://static.wixstatic.com/media/nsplsh_774e7a375f354576555755~mv2_d_6016_4000_s_4_2.jpg/v1/fill/w_640,h_450,al_t,q_80,usm_0.66_1.00_0.01/nsplsh_774e7a375f354576555755~mv2_d_6016_4000_s_4_2.webp"
                                    )
                                }
                            }}
                    />
                
                
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/people/communities">
                    <img 
                        className="People-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc} alt="background"
                            onLoad={() =>{
                                setImageText("Communities");
                                setLoadPage(<Communities />);
                                setUnderLine("communities");
                                if(window.innerWidth>500){
                                    setImageSrc(
                                        "https://static.wixstatic.com/media/55b9087be50e46b59051426e1cdd23cb.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/55b9087be50e46b59051426e1cdd23cb.webp"
                                    )
                                }
                                else{
                                    setImageSrc(
                                        "https://static.wixstatic.com/media/55b9087be50e46b59051426e1cdd23cb.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/55b9087be50e46b59051426e1cdd23cb.webp"
                                    )
                                }
                            }}
                    />
                
                
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/people/partners">
                    <img 
                        className="People-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc} alt="background"
                            onLoad={() =>{
                                setImageText("Partners");
                                setLoadPage(<Partners />);
                                setUnderLine("partners");
                                if(window.innerWidth>500){
                                    setImageSrc(
                                        "https://static.wixstatic.com/media/nsplsh_180cb9475d35470e81293861b8bb812d~mv2.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_180cb9475d35470e81293861b8bb812d~mv2.webp"
                                    )
                                }
                                else{
                                    setImageSrc(
                                        "https://static.wixstatic.com/media/nsplsh_180cb9475d35470e81293861b8bb812d~mv2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_180cb9475d35470e81293861b8bb812d~mv2.webp"
                                    )
                                }
                            }}
                    />
                
                
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/people/lifeatftp">
                    <img 
                        className="People-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc} alt="background"
                            onLoad={() =>{
                                setImageText("Life at FTP");
                                setLoadPage(<LifeAtFTP />);
                                setUnderLine("lifeatftp");
                                if(window.innerWidth>500){
                                    setImageSrc(
                                        "https://static.wixstatic.com/media/8daf94f88f524d8cb168d8004c1fe282.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/8daf94f88f524d8cb168d8004c1fe282.webp"
                                    )
                                }
                                else{
                                    setImageSrc(
                                        "https://static.wixstatic.com/media/8daf94f88f524d8cb168d8004c1fe282.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/8daf94f88f524d8cb168d8004c1fe282.webp"
                                    )
                                }
                            }}
                    />
                
                
                </Route>
            </Switch> 
            
            
        
            
        <ul className="People-Topbar__links">
            <Link
                to="/people/members"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                   >Members</li>
                    {
                        underLine==="members"
                        ?<div>
                            <hr style={{
                                height: "5px",
                                backgroundColor: "#10578B",
                                borderTop: "0",
                                borderLeft: "0",
                                marginLeft: "9px",
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
                    >Careers</li>
                    {
                        underLine==="careers"
                        ?<div>
                            <hr style={{
                                height: "5px",
                                backgroundColor: "#10578B",
                                borderTop: "0",
                                borderLeft: "0",
                                marginLeft: "9px",
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
                    >Communities</li>
                    {
                        underLine==="communities"
                        ?<div>
                            <hr style={{
                                height: "5px",
                                backgroundColor: "#10578B",
                                borderTop: "0",
                                borderLeft: "0",
                                marginLeft: "9px",
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
                    >Partners</li>
                    {
                        underLine==="partners"
                        ?<div>
                            <hr style={{
                                height: "5px",
                                backgroundColor: "#10578B",
                                borderTop: "0",
                                borderLeft: "0",
                                marginLeft: "9px",
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
                    >Life at FTP</li>
                    {
                        underLine==="lifeatftp"
                        ?<div>
                            <hr style={{
                                height: "5px",
                                backgroundColor: "#10578B",
                                borderTop: "0",
                                borderLeft: "0",
                                marginLeft: "9px",
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
                   >Members</li>
            </Link>
            <Link
                to="/people/careers"
                style={{
                    textDecoration: 'none',
                   
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                <li
                    >Careers</li>
            </Link>
            <Link
                to="/people/communities"
                style={{
                    textDecoration: 'none',
                   
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                <li
                    >Communities</li>
            </Link>
        
            <Link
                to="/people/partners"
                style={{
                    textDecoration: 'none',
                    
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                <li
                    >Partners</li>
            </Link>
            <Link
                to="/people/lifeatftp"
                style={{
                    textDecoration: 'none',
                    
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                <li
                    >Life at FTP</li>
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
