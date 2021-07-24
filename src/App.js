//importing  states  from react
import React, {useState} from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


//importing NavBar Components
import NavBar from "./components/NavBar/NavBar.js";

//importing Menubar components
import MenuBar from "./components/Menu/MenuBar.js";
import BackDrop from "./components/Menu/BackDrop.js";

//importing Mypages components
import MyPages from "./mypages/MyPages.js";

// name: Naini Yashwanth email: nainiyashwanth@gmail.com

const App = () => {

    //using state to set false value to sidemenuopen variable
    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    return (
        <Router >
            <div>
                <NavBar setSideMenuOpen={setSideMenuOpen} />
{/*  using conditional statement to open sidemenubar when sidemenuopen value is'true'*/}
                {
                    sideMenuOpen
                    ?<MenuBar 
                        setSideMenuOpen={setSideMenuOpen} 
                     />
                    :null
                }
                {
                    sideMenuOpen
                    ?<BackDrop  setSideMenuOpen={setSideMenuOpen}/>
                    : null
                }
                      
{/* using onclick method to change the sidemenuopen value to 'false' when the backdrop is clicked*/}
                                                       
                <div className="page-load">
                    <MyPages />
                </div>

            </div>
        </Router>
    );
};



export default App;
