//importing  states  from react
import React,{useState} from "react";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import "./App.css";

//importing logo
import logo from "./forthepeople.png"

//importing navbar javascript file from navbar component
import NavBar from "./components/NavBar/NavBar.js"

import MenuBar from "./components/Menu/MenuBar.js";

import MenuTogglerButton from "./components/Menu/MenuTogglerButton.js";

import Home from "./pages/home/Home.js"

import About from "./pages/about/About.js"

import People from "./pages/people/People.js"

import Operation from "./pages/operations/Operation.js"

import Report from "./pages/report/Report.js"


// name: Naini Yashwanth email: nainiyashwanth@gmail.com

const App = () => {

    //using state to set false value to sidemenuopen variable
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const [pageLoad ,setPageLode] = useState("");

    return (
        <div>
        <header className="header-section">
            <nav className="navigation-bar">
                <div className="toggler-button">
{/* using onclick method to change the sidemenuopen value to 'true' when the
* toggler button clicked
*/
}
                    <button onClick={() => setSideMenuOpen(true)} className="ham-button"><MenuTogglerButton/></button>

                </div>
                <div>
                    <a href="/"><img className="nav-icon" src={logo} alt="My logo"/></a>
                </div>
                <NavBar/> 
{/* using conditional statement to open sidemenubar when sidemenuopen value is'true'*/}
                    {
                        sideMenuOpen
                            ? <MenuBar/>
                            : null
                    }
{/* using onclick method to change the sidemenuopen value to 'false' when the
 * backdrop is clicked
 */
 }
                    <div className="backdrop" onClick={() => setSideMenuOpen(false)}></div>

            </nav>
            <div className="line"></div>
        </header>
        
            <Router>
            <div className="page-load">
                <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                           
                        <Route path="/about" exact="exact">
                            <About/>
                        </Route>

                        <Route path="/people" exact="exact">
                            <People/>
                        </Route>

                        <Route path="/operations" exact="exact">
                            <Operation/>
                        </Route>
                        
                        <Route path="/report" exact="exact">
                            <Report/>
                        </Route>
    
                            
                </Switch>
                </div>
            </Router>
        </div>
   
        );
    };



export default App;
