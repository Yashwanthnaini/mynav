import React , {useState}   from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import "./About.css" ;


import { Link } from "react-router-dom";


import arrow from "../Images/arrow.png";
import rotated from '../Images/rotated.png';


import Mission from "./OurMission/Mission.js";

import LifeAtFTP from "./LifeAtFTP/LifeAtFTP.js"

import GovernanceAndLeadership from "./GovernanceAndLeadership/G&L.js";

import HowWeDo from "./HowWeDo/HowWeDo.js";

import WhatWeDo from "./WhatWeDo/WhatWeDo.js";

import WhoWeAre from "./WhoWeAre/WhoWeAre.js";






const About = () => {

    const [imageSrc, setImageSrc] = useState(
        "https://static.wixstatic.com/media/nsplsh_396378342d516f77674c63~mv2.jpg"
    );
    const [imageText, setImageText] = useState("Mission");

    const [loadPage,setLoadPage] =useState(<Mission/>);

    const [openDropdown , setOpenDropdown] = useState(false);

    const [arrowSymbol,setArrowSymbol] = useState(arrow)
   
    const [underLine,setUnderLine] = useState("mission");
   
   
         
    return (
        <>
        < div className = "About-Imagebar"  > 
            <Switch>
                <Route exact path="/about/mission">
                    <img 
                        className="About-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                                }}
                        src={imageSrc} alt="background"
                        onLoad={() =>{
                            setImageText("Mission");
                            setLoadPage(<Mission />);
                            setUnderLine("mission");
                            if(window.innerWidth>500){
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_396378342d516f77674c63~mv2.jpg"
                                )
                            }
                            else{
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_396378342d516f77674c63~mv2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_396378342d516f77674c63~mv2.webp"
                                )
                            }
                            }}
                    />
                
                
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/about/whoweare">
                    <img 
                        className="About-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc} alt="background"
                        onLoad={() =>{
                            setImageText("Who we are");
                            setLoadPage(<WhoWeAre />);
                            setUnderLine("whoweare");
                            if(window.innerWidth>500){
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_fc8662d44f00446cbf9dbdefaace46e2~mv2.jpg"
                                )
                            }
                            else{
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_fc8662d44f00446cbf9dbdefaace46e2~mv2" +
                                    ".jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_fc8662d44f00446c" +
                                    "bf9dbdefaace46e2~mv2.webp"
                                )
                            }
                            }}
                    />
                
                
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/about/whatwedo">
                    <img 
                        className="About-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc} alt="background"
                        onLoad={() =>{
                            setImageText("What we do");
                            setLoadPage(<WhatWeDo />);
                            setUnderLine("whatwedo");
                            if(window.innerWidth>500){
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_705957754f4d687463366b~mv2_d_3008_2000_s_2.jpg"
                                )
                            }
                            else{
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_705957754f4d687463366b~mv2_d_3008_2000_s_2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_705957754f4d687463366b~mv2_d_3008_2000_s_2.webp"
                                )
                            }
                            }}
                    />
                
                
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/about/howwedo">
                    <img 
                        className="About-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc} alt="background"
                        onLoad={() =>{
                            setImageText("How we do");
                            setLoadPage(<HowWeDo />);
                            setUnderLine("howwedo");
                            if(window.innerWidth>500){
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_a16cbc9d8b944a2cb14aedf58a0afa1d~mv2.jpg"
                                )
                            }
                            else{
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_a16cbc9d8b944a2cb14aedf58a0afa1d~mv2" +
                    ".jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_a16cbc9d8b944a2c" +
                    "b14aedf58a0afa1d~mv2.webp"
                                )
                            }
                            }}
                    />
                
                
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/about/governance">
                    <img 
                        className="About-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc} alt="background"
                        onLoad={() =>{
                            setImageText("Governance & Leadership");
                            setLoadPage(<GovernanceAndLeadership />);
                            setUnderLine("governance");
                            if(window.innerWidth>500){
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_c9b625629d2743c987629d9db3939846~mv2.jpg" 
                                )
                            }
                            else{
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_c9b625629d2743c987629d9db3939846~mv2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_c9b625629d2743c987629d9db3939846~mv2.webp"
                                )
                            }
                            }}
                    />
                
                
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/about/lifeatftp">
                    <img 
                        className="About-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc}  alt="background"
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
        
            <ul className="About-Topbar__links">
                <Link
                    to="/about/mission"
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}>
                    <li
                        >Mission</li>
                        {
                            underLine==="mission"
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
                    to="/about/whoweare"
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}>
                    <li
                        >Who we are</li>
                    {
                        underLine==="whoweare"
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
                    to="/about/whatwedo"
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}>
                    <li
                       >What we do</li>
                        {
                            underLine==="whatwedo"
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
                    to="/about/howwedo"
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}>
                    <li
                        >How we do</li>
                        {
                            underLine==="howwedo"
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
                    to="/about/governance"
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}>
                    <li
                        >Governance & Leadership</li>
                        {
                            underLine==="governance"
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
                    to="/about/lifeatftp"
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
            <span >{imageText}</span>
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
        !openDropdown
            ? <ul className="dropdown_menu close">
            <Link
                to="/about/mission"
                style={{
                    textDecoration: 'none'
                }}  onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                
                {
                    underLine === "mission"
                    ?<li style={{color: "#000"}}>Mission</li>
                    :<li >Mission</li>
                }
            </Link>
            <Link
                to="/about/whoweare"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                
                {
                    underLine === "whoweare"
                    ?<li style={{color: "#000"}}>Who we are</li>
                    :<li >Who we are</li>
                }
            </Link>
            <Link
                 to="/about/whatwedo"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                
                {
                    underLine === "whatwedo"
                    ?<li style={{color: "#000"}}>What we do</li>
                    :<li >What we do</li>
                }
            </Link>
            <Link
                to="/about/howwedo"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
               
                {
                    underLine === "howwedo"
                    ?<li style={{color: "#000"}}>How we do</li>
                    :<li >How we do</li>
                }
            </Link>
            <Link
                to="/about/governance"
                style={{
                    textDecoration: 'none'
                    
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                
                {
                    underLine === "governance"
                    ?<li style={{color: "#000"}}>Governance & Leadership</li>
                    :<li >Governance & Leadership</li>
                }
            </Link>
            
            <Link
                to="/about/lifeatftp"
                style={{
                    textDecoration: 'none',
                    
                }}onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                
                {
                    underLine === "lifeatftp"
                    ?<li style={{color: "#000"}}>Life at FTP</li>
                    :<li >Life at FTP</li>
                }
            </Link>
        </ul>
        : <ul className="dropdown_menu open">
        <Link
            to="/about/mission"
            style={{
                textDecoration: 'none'
            }}  onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
            
            {
                underLine === "mission"
                ?<li style={{color: "#000"}}>Mission</li>
                :<li >Mission</li>
            }
        </Link>
        <Link
            to="/about/whoweare"
            style={{
                textDecoration: 'none'
            }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
            
            {
                underLine === "whoweare"
                ?<li style={{color: "#000"}}>Who we are</li>
                :<li >Who we are</li>
            }
        </Link>
        <Link
             to="/about/whatwedo"
            style={{
                textDecoration: 'none'
            }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
            
            {
                underLine === "whatwedo"
                ?<li style={{color: "#000"}}>What we do</li>
                :<li >What we do</li>
            }
        </Link>
        <Link
            to="/about/howwedo"
            style={{
                textDecoration: 'none'
            }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
           
            {
                underLine === "howwedo"
                ?<li style={{color: "#000"}}>How we do</li>
                :<li >How we do</li>
            }
        </Link>
        <Link
            to="/about/governance"
            style={{
                textDecoration: 'none'
                
            }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
            
            {
                underLine === "governance"
                ?<li style={{color: "#000"}}>Governance & Leadership</li>
                :<li >Governance & Leadership</li>
            }
        </Link>
        
        <Link
            to="/about/lifeatftp"
            style={{
                textDecoration: 'none',
                
            }}onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
            
            {
                underLine === "lifeatftp"
                ?<li style={{color: "#000"}}>Life at FTP</li>
                :<li >Life at FTP</li>
            }
        </Link>
    </ul>

    }
            <div>
        {loadPage}
    </div>
        </>
    )
}

export default About;
