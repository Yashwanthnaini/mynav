import React , {useState}   from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./BecomeAPart.css" ;


import { Link } from 'react-router-dom';


import arrow from "../Images/arrow.png";
import rotated from '../Images/rotated.png';


import Partners from "./Partners/Partners.js";

import Communities from "./Communities/Communities.js";

import Careers from "./Careers/Careers.js";



const BecomeAPart = () => {

    const [imageSrc, setImageSrc] = useState(
        "https://static.wixstatic.com/media/nsplsh_180cb9475d35470e81293861b8bb812d~mv2.jpg/v1/fill/w_1895,h_422,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_180cb9475d35470e81293861b8bb812d~mv2.webp"
    );
    const [imageText, setImageText] = useState("Partners");

    const [loadPage,setLoadPage] =useState(<Partners/>);

    const [openDropdown , setOpenDropdown] = useState(false);

    const [arrowSymbol,setArrowSymbol] = useState(arrow)
   
    const [underLine,setUnderLine] = useState("partners");
   
   
         
    return (
    <> 
        < div className = "Become-Imagebar"  > 
           
            <Switch>
                <Route exact path="/becomeapart/partners">
                    <img 
                        className="Become-Imagebar-image  " 
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
                                        "https://static.wixstatic.com/media/nsplsh_180cb9475d35470e81293861b8bb812d~mv2.jpg/v1/fill/w_1895,h_422,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_180cb9475d35470e81293861b8bb812d~mv2.webp"
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
                <Route exact path="/becomeapart/communities">
                    <img 
                        className="Become-Imagebar-image" 
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
                <Route exact path="/becomeapart/careers">
                    <img 
                        className="Become-Imagebar-image" 
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
                                        "https://static.wixstatic.com/media/nsplsh_774e7a375f354576555755~mv2_d_6016_4000_s_4_2.jpg/v1/fill/w_1895,h_422,al_t,q_85,usm_0.66_1.00_0.01/nsplsh_774e7a375f354576555755~mv2_d_6016_4000_s_4_2.webp"
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

            
        
            
            <ul className="Become-Topbar__links">
                <Link
                    to="/becomeapart/partners"
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
                    to="/becomeapart/communities"
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
                to="/becomeapart/careers"
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

            </ul>
            <span>{imageText}</span>
        </div>

           {/* Dropdown Bar */} 
        < p style={{
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
            className = "selected" > 
            <span className="text">{imageText}</span>
            <span ><img src={arrowSymbol} alt={arrowSymbol} id="image"/></span>
        </p>
            {
            !openDropdown
            ?<ul className="dropdown_menu close">
                <Link
                to="/becomeapart/partners"
                style={{
                    textDecoration: 'none',
                    
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                
                {
                    underLine === "partners"
                    ?<li style={{color: "#000"}}>Partners</li>
                    :<li >Partners</li>
                }
            </Link>

            <Link
                to="/becomeapart/communities"
                style={{
                    textDecoration: 'none',
                
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                
                {
                    underLine === "communities"
                    ?<li style={{color: "#000"}}>Communities</li>
                    :<li >Communities</li>
                }
            </Link>

            <Link
                to="/becomeapart/careers"
                style={{
                    textDecoration: 'none',
                
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                
                {
                    underLine === "careers"
                    ?<li style={{color: "#000"}}>Careers</li>
                    :<li >Careers</li>
                }
            </Link>
            </ul>           
            :<ul className="dropdown_menu open">
            <Link
                to="/becomeapart/partners"
                style={{
                    textDecoration: 'none',
                    
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                
                {
                    underLine === "partners"
                    ?<li style={{color: "#000"}}>Partners</li>
                    :<li >Partners</li>
                }
            </Link>

            <Link
                to="/becomeapart/communities"
                style={{
                    textDecoration: 'none',
                
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                
                {
                    underLine === "communities"
                    ?<li style={{color: "#000"}}>Communities</li>
                    :<li >Communities</li>
                }
            </Link>

            <Link
                to="/becomeapart/careers"
                style={{
                    textDecoration: 'none',
                
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                
                {
                    underLine === "careers"
                    ?<li style={{color: "#000"}}>Careers</li>
                    :<li >Careers</li>
                }
            </Link>
    
        </ul>
          
            
                }
                
            
            <div>
        {loadPage}
            </div>
    </>
    )}


export default BecomeAPart;
