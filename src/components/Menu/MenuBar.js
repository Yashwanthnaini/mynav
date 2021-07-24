import React, {useState} from "react";




//importing Menubar components
import "./MenuBar.css";
import BackDrop from "./BackDrop.js";
import DropDownIcon from "./DropDownIcon.js";
import DownArrowIcon from "./DownArrowIcon.js";
import ExploreOne from "./ExploreOne.js";
import ExploreTwo from "./ExploreTwo.js";
import Forum from "./Forum.js";
import MenuCrossIcon from "./MenuCrossIcon.js";
import SocialMediaLinks from "./SocialMediaLinks.js";

const MenuBar = ({setSideMenuOpen}) =>{

    const [exploreOneOpen ,setExploreOneOpen] = useState(true);

    const [exploreTwoOpen ,setExploreTwoOpen] = useState(true);

    return(
        <>
            <div  className="menu">
                <div 
                    className="menu-slide menu-modal__content wef-bfltzr"
                    role="dialog"
                    id="menu-modal-1"
                    tabindex="-1"
                    aria-modal="true"
                    aria-describedby="menu-modal--body-1"
                    style={{position: "fixed", width: "100%" ,height: "100vh", left: "0px", top: "0px", transform: "translateX(0%) translateZ(0px)"}}
                    >
                    <div onClick={() => setSideMenuOpen(false)}><MenuCrossIcon /></div>
                    <div className="menu-modal__body wef-1fibqux" id="menu-modal--body-1">
                        <div className="wef-0">
                            <header className="wef-6detrv" onClick={() => setExploreTwoOpen(!exploreTwoOpen)}>
                                <h4 className="menu-text wef-1pkwypy" >
                                    <div className="wef-gg4vpm">
                                    Explore
                                        <div >
                                            {
                                                exploreTwoOpen
                                                ?<DropDownIcon />
                                                :<DownArrowIcon />
                                            }
                                            </div>
                                    </div>
                                </h4>
                            </header>
                            {
                                exploreTwoOpen
                                ? <ExploreTwo setSideMenuOpen={setSideMenuOpen} />
                                :null
                            }
                        </div>
                        <div className="wef-0">
                    
                            <header  onClick={() => setExploreOneOpen(!exploreOneOpen)} className="wef-6detrv">
                                <h4 className="menu-text wef-1pkwypy">
                                    <div className="wef-gg4vpm">                                    
                                        Explore more   
                                        <div>{
                                                exploreOneOpen
                                                ?<DropDownIcon />
                                                :<DownArrowIcon />
                                            }
                                        </div>
                                    </div>
                                </h4>
                            </header>
                            {
                                exploreOneOpen
                                ? <ExploreOne setSideMenuOpen={setSideMenuOpen}/>
                                :null
                            }
                    
                        </div>
                        <Forum setSideMenuOpen={setSideMenuOpen} />
                        <SocialMediaLinks setSideMenuOpen={setSideMenuOpen} />
                    </div>
                </div>
            </ div> 
            
              

    </>                        
    )
}

export default MenuBar;

