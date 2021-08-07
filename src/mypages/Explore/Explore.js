import React , {useState}   from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import "./Explore.css" ;


import { Link } from 'react-router-dom';


import arrow from "../Images/arrow.png";
import rotated from '../Images/rotated.png';


import Blog from "./Blog/Blog.js";
import Contact from "./ContactUs/Contact.js";
import Finance from "./FinancialsAndReports/F&R.js";
import Report from "./Reports/Report.js";


const Explore = () => {

    const [imageSrc, setImageSrc] = useState(
        "https://static.wixstatic.com/media/nsplsh_36587739774d4a79487573~mv2.jpg/v1/fill/w_1895,h_648,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_36587739774d4a79487573~mv2.webp"
    );
    const [imageText, setImageText] = useState("Blog");

    const [loadPage,setLoadPage] =useState(<Blog />);

    const [openDropdown , setOpenDropdown] = useState(false);

    const [arrowSymbol,setArrowSymbol] = useState(arrow)
   
    const [underLine,setUnderLine] = useState("blog");
   
   
         
    return (
        <>
        < div className = "Explore-Imagebar"  > 
            <Switch>
                <Route exact path="/explore/blog">
                    <img 
                        className="Explore-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                                }}
                        src={imageSrc} alt="background"
                        onLoad={() =>{
                            setImageText("Blog");
                            setLoadPage(<Blog />);
                            setUnderLine("blog");
                            if(window.innerWidth>500){
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_36587739774d4a79487573~mv2.jpg/v1/fill/w_1895,h_648,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_36587739774d4a79487573~mv2.webp"
                                )
                            }
                            else{
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_36587739774d4a79487573~mv2.jpg/v1/fill/w_640,h_974,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_36587739774d4a79487573~mv2.webp"
                                )
                            }
                            }}
                    />
                
                
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/explore/reports">
                    <img 
                        className="Explore-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc} alt="background"
                        onLoad={() =>{
                            setImageText("Reports");
                            setLoadPage(<Report />);
                            setUnderLine("reports");
                            if(window.innerWidth>500){
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_71777443654a35634c5973~mv2_d_2947_2121_s_2.jpg/v1/fill/w_1895,h_435,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_71777443654a35634c5973~mv2_d_2947_2121_s_2.webp"
                                )
                            }
                            else{
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_71777443654a35634c5973~mv2_d_2947_2121_s_2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_71777443654a35634c5973~mv2_d_2947_2121_s_2.webp"
                                )
                            }
                            }}
                    />
                
                
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/explore/finance">
                    <img 
                        className="Explore-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc} alt="background"
                        onLoad={() =>{
                            setImageText("Financials & Reports");
                            setLoadPage(<Finance />);
                            setUnderLine("finance");
                            if(window.innerWidth>500){
                                setImageSrc(
                                    "https://static.wixstatic.com/media/84770f_5251001816154d3d9e793f346f9eca55~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_1895,h_422,al_c,q_85,usm_0.66_1.00_0.01/84770f_5251001816154d3d9e793f346f9eca55~mv2_d_5472_3648_s_4_2.webp"
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
                <Route exact path="/explore/contact">
                    <img 
                        className="Explore-Imagebar-image" 
                        style={{width: "100%",
                                height: "286px",
                                objectFit: "cover",                  
                            }}
                        src={imageSrc} alt="background"
                        onLoad={() =>{
                            setImageText("Contact Us");
                            setLoadPage(<Contact />);
                            setUnderLine("contact");
                            if(window.innerWidth>500){
                                setImageSrc(
                                    "https://static.wixstatic.com/media/nsplsh_2d0effc05f29423e8295ff8261af8c33~mv2.jpg/v1/fill/w_1895,h_422,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_2d0effc05f29423e8295ff8261af8c33~mv2.webp"
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

            
        
            <ul className="Explore-Topbar__links">
                <Link
                    to="/explore/blog"
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}>
                    <li
                        >Blog</li>
                        {
                            underLine==="blog"
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
                    to="/explore/reports"
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}>
                    <li
                        >Reports</li>
                    {
                        underLine==="reports"
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
                    to="/explore/finance"
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
                    to="/explore/contact"
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
                to="/explore/blog"
                style={{
                    textDecoration: 'none'
                }}  onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                
                {
                    underLine === "blog"
                    ?<li style={{color: "#000"}}>Blog</li>
                    :<li >Blog</li>
                }
            </Link>
            <Link
                to="/explore/reports"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
               {
                    underLine === "reports"
                    ?<li style={{color: "#000"}}>Reports</li>
                    :<li >Reports</li>
                }
            </Link>
            <Link
                 to="/explore/finance"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                
                {
                    underLine === "finance"
                    ?<li style={{color: "#000"}}>Financials & Reports</li>
                    :<li >Financials & Reports</li>
                }
            </Link>
            <Link
                to="/explore/contact"
                style={{
                    textDecoration: 'none'
                }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
                
                {
                    underLine === "contact"
                    ?<li style={{color: "#000"}}>Contact Us</li>
                    :<li >Contact Us</li>
                }
            </Link>
        
    
        </ul>
        : <ul className="dropdown_menu open">
        <Link
            to="/explore/blog"
            style={{
                textDecoration: 'none'
            }}  onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
            
            {
                underLine === "blog"
                ?<li style={{color: "#000"}}>Blog</li>
                :<li >Blog</li>
            }
        </Link>
        <Link
            to="/explore/reports"
            style={{
                textDecoration: 'none'
            }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
           {
                underLine === "reports"
                ?<li style={{color: "#000"}}>Reports</li>
                :<li >Reports</li>
            }
        </Link>
        <Link
             to="/explore/finance"
            style={{
                textDecoration: 'none'
            }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
            
            {
                underLine === "finance"
                ?<li style={{color: "#000"}}>Financials & Reports</li>
                :<li >Financials & Reports</li>
            }
        </Link>
        <Link
            to="/explore/contact"
            style={{
                textDecoration: 'none'
            }} onClick={() => {setOpenDropdown(false); setArrowSymbol(arrow)}}>
            
            {
                underLine === "contact"
                ?<li style={{color: "#000"}}>Contact Us</li>
                :<li >Contact Us</li>
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

export default Explore;
