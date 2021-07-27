import React , {useState}   from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import "./About.css" ;


import { Link } from 'react-router-dom';


import arrow from "../StylesCSS/images/arrow.png";
import rotated from '../StylesCSS/images/rotated.png';


import Mission from "./Mission/Mission.js";

import Finance from "./FinancialsAndReports/F&R.js";

import GovernanceAndLeadership from "./GovernanceAndLeadership/G&L.js";

import Contact from "./ContactUs/Contact.js";

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
                <Route exact path="/about/finance">
                    <img 
                        className="About-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc} alt="background"
                        onLoad={() =>{
                            setImageText("Financial & Reports");
                            setLoadPage(<Finance />);
                            setUnderLine("finance");
                            if(window.innerWidth>500){
                                setImageSrc(
                                    "https://static.wixstatic.com/media/84770f_5251001816154d3d9e793f346f9eca55~mv2_d_5472_3648_s_4_2.jpg" 
                                )
                            }
                            else{
                                setImageSrc(
                                    "https://static.wixstatic.com/media/84770f_5251001816154d3d9e793f346f9eca55~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/84770f_5251001816154d3d9e793f346f9eca55~mv2_d_5472_3648_s_4_2.webp"
                                )
                            }
                            
                            }}
                    />
                
                
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/about/contact">
                    <img 
                        className="About-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc}  alt="background"
                        onLoad={() =>{
                            setImageText("Contact Us");
                            setLoadPage(<Contact />);
                            setUnderLine("contact");
                            if(window.innerWidth>500){
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_2d0effc05f29423e8295ff8261af8c33~mv2.jpg"
                                )
                            }
                            else{
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_2d0effc05f29423e8295ff8261af8c33~mv2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_2d0effc05f29423e8295ff8261af8c33~mv2.webp"
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
                    to="/about/finance"
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}>
                    <li
                       >Financials & Reports</li>
                        {
                            underLine==="finance"
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
                    to="/about/contact"
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}>
                    <li
                        >Contact Us</li>
                    {
                        underLine==="contact"
                    
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
                to="/about/mission"
                style={{
                    textDecoration: 'none'
                }}  onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li >Mission</li>
            </Link>
            <Link
                to="/about/whoweare"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li 
                    >Who we are</li>
            </Link>
            <Link
                 to="/about/whatwedo"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li 
                    >What we do</li>
            </Link>
            <Link
                to="/about/howwedo"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li 
                    >How we do</li>
            </Link>
            <Link
                to="/about/governance"
                style={{
                    textDecoration: 'none'
                    
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li >GovernanceAndLeadership</li>
                 </Link>
            <Link
                to="/about/finance"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li 
                    >FinancialsAndReports</li>
            </Link>
            <Link
                to="/about/contact"
                style={{
                    textDecoration: 'none',
                    
                }}onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                <li
                    >Contact Us</li>
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

export default About;
