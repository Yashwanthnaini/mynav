import React from "react";

import "./Footer.css";

import {Link} from 'react-router-dom';

import Logo from "./Logo/forthepeoplengo.png";

import SocialLinks from "./SocialLinks/SocialLinks.js";

import "../Menu/MenuBar.css"

const Footer = () => {
    return (
        <> 
            < div className = "chakra " > <footer className="wef-0 wef-g0ppx3">

                <div className="wef-1rr3t8u">

                    <div className="wef-jsnnc">

                        <img className="updatelogo" src={Logo} alt="nav logo"/>

                        <div className="wef-0">

                        <p className="chakra-text wef-1aiqzid">Subscribe for updates</p>

                        <p className="chakra-text wef-10sxrub">A weekly update of what’s on the Global Agenda</p>

                    </div>

                    <form
                        action="d"
                        method="post"
                        target="_blank">

                        <div className="chakra-input__group wef-4302v8">

                            <input
                                type="email"
                                name="EMAIL"
                                aria-label="Email address"
                                placeholder="Email address"
                                className="chakra-input wef-16au7hf"/>

                            <div className="chakra-input__right-element wef-1s6lxpf">

                                <button type="submit" className="chakra-button wef-105qunb" aria-label="submit">

                                    <svg
                                        viewBox="0 0 21 18"
                                        focusable="false"
                                        className="chakra-icon wef-onkibi"
                                        aria-hidden="true">

                                        <path
                                            d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z"
                                            fill="currentColor"></path>

                                    </svg>

                                </button>

                            </div>

                        </div>

                    </form>

                </div>

            </div>

            <div className="wef-1vip485 footer-links  ">

                <section className="wef-0 ">

                    <header className="wef-1501xib">

                        <h4 className="chakra-text wef-hrf8xs">About</h4>

                    </header>

                    <div className="chakra-stack wef-vjz5tp">

                        <Link
                            className="chakra-link wef-7j5z8a"
                            to="/about/mission">Our Mission</Link>
                        <Link
                            className="chakra-link wef-7j5z8a"
                            to="/about/whoweare">Who we are</Link>
                        <Link className="chakra-link wef-7j5z8a" 
                            to="/about/whatwedo">What we do</Link>
                        <Link
                            className="chakra-link wef-7j5z8a"
                            to="/about/howwedo">How we do</Link>
                        <Link className="chakra-link wef-7j5z8a" 
                            to="/about/governance">Governance & Leadership</Link>
                        <Link
                            className="chakra-link wef-7j5z8a"
                            to="/about/finance">Financials & Reports</Link>
                        <Link
                            className="chakra-link wef-7j5z8a"
                            to="/about/contact">Contact Us</Link>
                                                
                    </div>

                </section>

                <section className="wef-0 ">

                    <header className="wef-1501xib">

                        <h4 className="chakra-text wef-hrf8xs">People</h4>

                    </header>

                    <div className="chakra-stack wef-vjz5tp">

                        <Link className="chakra-link wef-7j5z8a" 
                            to="/people/members">Members</Link>

                        <Link className="chakra-link wef-7j5z8a" 
                            to="/people/careers">Careers</Link>

                        <Link
                            className="chakra-link wef-7j5z8a"
                            to="people/communities">Communities</Link>
                        
                        <Link
                            className="chakra-link wef-7j5z8a"
                            to="people/partners">Partners</Link>

                        <Link
                            className="chakra-link wef-7j5z8a"
                            to="people/lifeatftp">Life at FTP</Link>

                    </div>

                </section>


                <section className="wef-0 ">

                    <header className="wef-1501xib">
                        <h4 className="chakra-text wef-hrf8xs">Operations</h4>
                    </header>

                    <div className="chakra-stack wef-vjz5tp">

                        <Link className="chakra-link wef-7j5z8a" 
                            to="/operations/events">Events</Link>
                        <Link className="chakra-link wef-7j5z8a" 
                            to="/operations/projects">Projects</Link>
                        <Link className="chakra-link wef-7j5z8a" 
                            to="/operations/gallery">Gallery</Link>
                        <Link className="chakra-link wef-7j5z8a" 
                            to="/operations/contact">Contact Us</Link>
                    </div>

                </section>

                <div className="chakra-stack wef-173m771">

                    <section className="wef-0">

                        <header className="wef-1501xib">

                            <h4 className="chakra-text wef-hrf8xs">Follow For The People NGO</h4>

                        </header>

                       
                            <div className="chakra-stack wef-1ls42ek" data-gtm-subcontext="social-links">

                                
                                <SocialLinks />

                            </div>

                    </section>
                        
                    


                </div>
                
            </div>

            <div className="wef-wkento">

                <p className="footer-text wef-1aifeqs">© 2021 For The People NGO
                </p>

                <Link className="chakra-link wef-7j5z8a" to="/about/privacy-and-terms-of-use">Privacy Policy &amp; Terms of Service</Link>

            </div>

        </footer> 
    </div>
</>
    )
}

export default Footer;