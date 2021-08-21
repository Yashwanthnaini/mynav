import React, {useState} from "react";




//importing Menubar components
import "./MenuBar.css";

import DropDownIcon from "./DropDownIcon/DropDownIcon.js";
import DownArrowIcon from "./DownArrowIcon/DownArrowIcon.js";
import MenuCrossIcon from "./MenuCrossIcon/MenuCrossIcon.js";
import SocialMediaLinks from "./SocialMediaLinks/SocialMediaLinks";
import ExploreLinks from "./ExploreLinks/ExploreLinks";
import AboutUsLinks from "./AboutUsLinks/AboutUsLinks";
import OperationLinks from "./OperationLinks/OperationLinks";
import BecomeAPartLinks from "./BecomeAPartLinks/BecomeAPartLinks";


const MenuBar = ({setSideMenuOpen},{sideMenuOpen}) =>{

    const [OperationLinksOpen ,setOperationsLinksOpen] = useState(true);

    const [ExploreLinksOpen , setExploreLinksOpen] = useState(true);

    const [AboutUsLinksOpen , setAboutUsLinksOpen] = useState(true);

    const [BecomeAPartLinksOpen , setBecomeAPartLinksOpen] = useState(true);


    

    return(
        <>
            
                
                
                    <div onClick={() => setSideMenuOpen(false)}><MenuCrossIcon /></div>
                    <div className="menu-modal__body wef-1fibqux" id="menu-modal--body-1">
                        <div className="wef-0">
                            <header className="wef-6detrv" onClick={() => setOperationsLinksOpen(!OperationLinksOpen)}>
                                <h4 className="menu-text wef-1pkwypy" >
                                    <div className="wef-gg4vpm">
                                    Operations
                                        <div >
                                            {
                                                OperationLinksOpen
                                                ?<DropDownIcon />
                                                :<DownArrowIcon />
                                            }
                                            </div>
                                    </div>
                                </h4>
                            </header>
                            {
                                OperationLinksOpen
                                ? <OperationLinks setSideMenuOpen={setSideMenuOpen} />
                                :null
                            }
                        </div>
                        <div className="wef-0">
                    
                            <header  onClick={() => setExploreLinksOpen(!ExploreLinksOpen)} className="wef-6detrv">
                                <h4 className="menu-text wef-1pkwypy">
                                    <div className="wef-gg4vpm">                                    
                                        Explore   
                                        <div>{
                                                ExploreLinksOpen
                                                ?<DropDownIcon />
                                                :<DownArrowIcon />
                                            }
                                        </div>
                                    </div>
                                </h4>
                            </header>
                            {
                                ExploreLinksOpen
                                ? <ExploreLinks setSideMenuOpen={setSideMenuOpen}/>
                                :null
                            }
                    
                        </div>
                        <div className="wef-0">
                    
                            <header  onClick={() => setBecomeAPartLinksOpen(!BecomeAPartLinksOpen)} className="wef-6detrv">
                                <h4 className="menu-text wef-1pkwypy">
                                    <div className="wef-gg4vpm">                                    
                                        Become a Part   
                                        <div>{
                                                BecomeAPartLinksOpen
                                                ?<DropDownIcon />
                                                :<DownArrowIcon />
                                            }
                                        </div>
                                    </div>
                                </h4>
                            </header>
                            {
                                BecomeAPartLinksOpen
                                ? <BecomeAPartLinks setSideMenuOpen={setSideMenuOpen}/>
                                :null
                            }
                    
                        </div>

                        <div className="wef-0">
                    
                            <header  onClick={() => setAboutUsLinksOpen(!AboutUsLinksOpen)} className="wef-6detrv">
                                <h4 className="menu-text wef-1pkwypy">
                                    <div className="wef-gg4vpm">                                    
                                        About Us   
                                        <div>{
                                                AboutUsLinksOpen
                                                ?<DropDownIcon />
                                                :<DownArrowIcon />
                                            }
                                        </div>
                                    </div>
                                </h4>
                            </header>
                            {
                                AboutUsLinksOpen
                                ? <AboutUsLinks setSideMenuOpen={setSideMenuOpen}/>
                                :null
                            }
                    
                        </div>
                        <div style={{paddingTop: "15px" }}>
                        <SocialMediaLinks setSideMenuOpen={setSideMenuOpen}  />
                        </div>
                        
                    </div>
                
 
            
              

    </>                        
    )
}

export default MenuBar;

