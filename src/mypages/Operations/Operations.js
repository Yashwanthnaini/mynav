import React , {useState}   from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./Operations.css" ;


import { Link } from 'react-router-dom';


import arrow from "../Images/arrow.png";
import rotated from '../Images/rotated.png';


import Events from "./Events/Events.js";

import Projects from "./Projects/Projects.js";

import Gallery from "./Gallery/Gallery.js";










const Operations = () => {

    const [imageSrc, setImageSrc] = useState(
        
        "https://static.wixstatic.com/media/nsplsh_63583276456c513561486b~mv2_d_5860_3912_s_4_2.jpg/v1/fill/w_1895,h_425,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_63583276456c513561486b~mv2_d_5860_3912_s_4_2.webp"
    );
    const [imageText, setImageText] = useState("Events");

    const [loadPage,setLoadPage] =useState(<Events/>);

    const [openDropdown , setOpenDropdown] = useState(false);

    const [arrowSymbol,setArrowSymbol] = useState(arrow);

    const [underLine,setUnderLine] = useState("events");
   
   
   
         
    return (
        <>
        < div className = "Operations-Imagebar" >
        <Switch>
            <Route exact path="/operations/events">
                <img className="Operations-Imagebar-image" 
                    style={{width: "100%",
                            height: "286px",
                            objectFit: "cover",                    
                    }}
                     src={imageSrc} alt="background"
                     onLoad={() =>{
                        setImageText("Events");setLoadPage(<Events />);
                        setUnderLine("events");
                        if(window.innerWidth>500){
                            setImageSrc(
                                "https://static.wixstatic.com/media/nsplsh_63583276456c513561486b~mv2_d_5860_3912_s_4_2.jpg/v1/fill/w_1895,h_425,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_63583276456c513561486b~mv2_d_5860_3912_s_4_2.webp"
                            )
                        }
                        else{
                            setImageSrc(
                                "https://static.wixstatic.com/media/nsplsh_63583276456c513561486b~mv2_d_5860_3912_s_4_2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_63583276456c513561486b~mv2_d_5860_3912_s_4_2.webp"
                            )
                        }
                      }}
                />
             
            
            </Route>
        </Switch> 
        <Switch>
            <Route exact path="/operations/projects">
                <img className="Operations-Imagebar-image" 
                    style={{width: "100%",
                            height: "286px",
                            objectFit: "cover",                    
                    }}
                     src={imageSrc} alt="background"
                     onLoad={() =>{
                        setImageText("Projects");
                        setLoadPage(<Projects />);
                        setUnderLine("projects");
                        if(window.innerWidth>500){
                            setImageSrc(
                                "https://static.wixstatic.com/media/nsplsh_6232315479333343715673~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_6232315479333343715673~mv2_d_6000_4000_s_4_2.webp"
                            )
                        }
                        else{
                            setImageSrc(
                                "https://static.wixstatic.com/media/nsplsh_6232315479333343715673~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_6232315479333343715673~mv2_d_6000_4000_s_4_2.webp"
                            )
                        }
                      }}
                />
          
            </Route>
        </Switch> 
        <Switch>
            <Route exact path="/operations/gallery">
                <img className="Operations-Imagebar-image" 
                    style={{width: "100%",
                            height: "286px",
                            objectFit: "cover",                    
                    }}
                     src={imageSrc} alt="background"
                     onLoad={() =>{
                        setImageText("Gallery");
                        setLoadPage(<Gallery />);
                        setUnderLine("gallery");
                        if(window.innerWidth>500){
                            setImageSrc(
                                "https://static.wixstatic.com/media/nsplsh_536d345446453778744451~mv2_d_6000_4500_s_4_2.jpg/v1/fill/w_1895,h_425,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_536d345446453778744451~mv2_d_6000_4500_s_4_2.webp"
                            )
                        }
                        else{
                            setImageSrc(
                                "https://static.wixstatic.com/media/nsplsh_536d345446453778744451~mv2_d_6000_4500_s_4_2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_536d345446453778744451~mv2_d_6000_4500_s_4_2.webp"
                            )
                        }
                      }}
                />
                
            </Route>
        </Switch> 
        
         
        <ul className="Operations-Topbar__links">
            <Link
                to="/operations/events"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    >Events</li>
                    {
                        underLine==="events"
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
                to="/operations/projects"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    >Projects</li>
                    {
                        underLine==="projects"
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
                to="/operations/gallery"
                style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>
                <li
                    >Gallery</li>
                    {
                        underLine==="gallery"
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
        !openDropdown
            ? <ul className="dropdown_menu close">
             <Link
                to="/operations/events"
                style={{
                    textDecoration: 'none',
                    
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                
                {
                    underLine === "events"
                    ?<li style={{color: "#000"}}>Events</li>
                    :<li >Events</li>
                }
            </Link>
            <Link
                to="/operations/projects"
                style={{
                    textDecoration: 'none',
                
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                
                {
                    underLine === "projects"
                    ?<li style={{color: "#000"}}>Projects</li>
                    :<li >Projects</li>
                }
            </Link>
            <Link
                to="/operations/gallery"
                style={{
                    textDecoration: 'none',
                    
                }}
                onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
                >
                
                {
                    underLine === "gallery"
                    ?<li style={{color: "#000"}}>Gallery</li>
                    :<li >Gallery</li>
                }
            </Link>
        
            
        </ul>
        : <ul className="dropdown_menu open">
        <Link
           to="/operations/events"
           style={{
               textDecoration: 'none',
               
           }}
           onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
           >
           
           {
               underLine === "events"
               ?<li style={{color: "#000"}}>Events</li>
               :<li >Events</li>
           }
       </Link>
       <Link
           to="/operations/projects"
           style={{
               textDecoration: 'none',
           
           }}
           onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
           >
           
           {
               underLine === "projects"
               ?<li style={{color: "#000"}}>Projects</li>
               :<li >Projects</li>
           }
       </Link>
       <Link
           to="/operations/gallery"
           style={{
               textDecoration: 'none',
               
           }}
           onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}
           >
           
           {
               underLine === "gallery"
               ?<li style={{color: "#000"}}>Gallery</li>
               :<li >Gallery</li>
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

export default Operations;
