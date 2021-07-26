import React from "react";
import Telegram_logo from "./Icons/Telegram_logo.svg"
import pinterest_logo from "./Icons/pinterest_logo.svg"
import Reddit_logo from "./Icons/reddit-4.svg";

const SocialMediaLinks = ({setSideMenuOpen}) => {
    return(
        <>
            <div className="menu-stack wef-1ls42ek" data-gtm-subcontext="social-links">
                <a onClick={() => setSideMenuOpen(false)}
                    
                    className="menu-link wef-bp2r9n"
                    href="https://www.facebook.com/forthepeoplengo/">
                    <svg
                        viewBox="0 0 26 26"
                        focusable="false"
                        className="menu-icon wef-yekspl"
                        aria-label="Facebook">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 23.8334C0 25.0305 0.969647 26 2.16656 26H23.8334C25.0305 26 26 25.0305 26 23.8334V2.16656C26 0.969587 25.0305 0 23.8334 0H2.16662C0.969647 0 5.97002e-05 0.969647 5.97002e-05 2.16656V23.8334H0ZM13.5417 22.75V14.0834H11.375V10.8333H13.5417C13.5417 5.2487 13.7798 4.875 20.5835 4.875V8.12503C16.9974 8.12503 17.3334 8.32547 17.3334 10.8333H20.5835V14.0834H17.3334V22.75H13.5417V22.75Z"
                            fill="currentColor"></path>
                    </svg>
                </a>
                <a onClick={() => setSideMenuOpen(false)}
                    
                    className="menu-link wef-1e6xawk"
                    href="https://twitter.com/forthepeoplengo">
                    <svg
                        viewBox="0 0 32 26"
                        focusable="false"
                        className="menu-icon wef-yekspl"
                        aria-label="Twitter">
                        <path
                            d="M32 3.08073C30.8201 3.60208 29.5588 3.95417 28.2297 4.11667C29.5859 3.30417 30.6302 2.01771 31.1185 0.4875C29.8504 1.23906 28.4467 1.7875 26.9481 2.07865C25.7478 0.798958 24.039 0 22.1538 0C18.526 0 15.5897 2.93854 15.5897 6.56094C15.5897 7.07552 15.644 7.57656 15.7593 8.05729C10.3005 7.78646 5.45878 5.17292 2.2242 1.19844C1.66137 2.16667 1.33588 3.2974 1.33588 4.49583C1.33588 6.77083 2.49544 8.78177 4.25853 9.9599C3.18034 9.93281 2.16317 9.6349 1.28163 9.14062C1.28163 9.16771 1.28163 9.19479 1.28163 9.22188C1.28163 12.4042 3.54651 15.0516 6.55054 15.6542C6.00127 15.8031 5.4181 15.8844 4.82136 15.8844C4.40093 15.8844 3.98729 15.8438 3.5872 15.7625C4.42128 18.3693 6.84891 20.2651 9.72409 20.3193C7.47955 22.0797 4.64505 23.1292 1.56643 23.1292C1.03751 23.1292 0.515363 23.0953 0 23.0344C2.90231 24.9167 6.35389 26 10.0564 26C22.1403 26 28.7451 15.9995 28.7451 7.32604C28.7451 7.04167 28.7383 6.75729 28.7247 6.47969C30.0064 5.55208 31.1185 4.39427 32 3.08073Z"
                            fill="currentColor">
                        </path>
                    </svg>
                </a>
                <a onClick={() => setSideMenuOpen(false)}
                    
                    className="menu-link wef-y705st"
                    href="https://www.linkedin.com/company/nonprofit-forthepeople">
                    <svg
                        viewBox="0 0 32 26"
                        focusable="false"
                        className="menu-icon wef-yekspl"
                        aria-label="LinkedIn">
                        <path
                            d="M.421 8.6199h5.3924v17.3399H.421v-17.34zM3.1272 0c1.724 0 3.1272 1.4032 3.1272 3.1272 0 1.724-1.4032 3.1272-3.1272 3.1272C1.3932 6.2544 0 4.8512 0 3.1272 0 1.4032 1.3932 0 3.1272 0zM9.1992 8.62h5.1619v2.3754h.0702c.7216-1.3631 2.4757-2.7964 5.1017-2.7964 5.4526 0 6.4649 3.5882 6.4649 8.259v9.5019h-5.3824v-8.4294c0-2.0147-.03-4.6006-2.7964-4.6006-2.8065 0-3.2275 2.195-3.2275 4.4502v8.5798H9.2092v-17.34h-.01z"
                            fill="currentColor">
                        </path>
                    </svg>
                </a>
                <a onClick={() => setSideMenuOpen(false)}
                    
                    className="menu-link wef-1845p8s"
                    href="https://t.me/forthepeoplengo">
                    <img className="menu-icon wef-yekspl" src={Telegram_logo} alt="telegram logo" />
                </a>
                <a onClick={() => setSideMenuOpen(false)}
                    
                    className="menu-link wef-erlri7"
                    href="https://www.pinterest.com/forthepeoplengo/">
                    <img src={pinterest_logo} className="menu-icon wef-yekspl"  alt="pinterest logo"/>
                </a>
                <a onClick={() => setSideMenuOpen(false)}
                    
                    className="menu-link wef-fxxg6w"
                    href="https://www.instagram.com/forthepeoplengo/">
                    <svg
                        viewBox="0 0 26 26"
                        focusable="false"
                        className="menu-icon wef-yekspl"
                        aria-label="Instagram">
                        <path
                            d="M12.9992 6.2378c-3.6693 0-6.7096 2.9879-6.7096 6.7097a6.6891 6.6891 0 006.7096 6.7096c3.7218 0 6.7097-3.0403 6.7097-6.7096 0-3.6694-3.0403-6.7097-6.7097-6.7097zm0 11.0081c-2.3588 0-4.2984-1.9396-4.2984-4.2984 0-2.3589 1.9396-4.2984 4.2984-4.2984 2.3589 0 4.2984 1.9395 4.2984 4.2984 0 2.3588-1.9395 4.2984-4.2984 4.2984zM19.9733 7.6009c.8396 0 1.5202-.6806 1.5202-1.5202s-.6806-1.5202-1.5202-1.5202-1.5202.6806-1.5202 1.5202.6806 1.5202 1.5202 1.5202z"
                            fill="currentColor">
                        </path>
                        <path
                        d="M23.9032 2.1492C22.5403.7339 20.6008 0 18.3992 0H7.6008C3.0403 0 0 3.0403 0 7.6008v10.746c0 2.254.7339 4.1935 2.2016 5.6088C3.617 25.3186 5.504 26 7.6532 26h10.6936c2.254 0 4.1411-.7339 5.504-2.0444C25.2661 22.5927 26 20.6532 26 18.3992V7.6008c0-2.2016-.7339-4.0887-2.0968-5.4516zm-.2097 16.25c0 1.625-.5766 2.9355-1.5201 3.8266-.9436.8911-2.254 1.3629-3.8266 1.3629H7.6532c-1.5725 0-2.883-.4718-3.8266-1.3629-.9435-.9435-1.4153-2.254-1.4153-3.879V7.6008c0-1.5726.4718-2.883 1.4153-3.8266.8911-.8911 2.254-1.363 3.8266-1.363h10.7984c1.5726 0 2.8831.4719 3.8266 1.4154.8912.9436 1.4153 2.254 1.4153 3.7742v10.7984z"
                            fill="currentColor">
                        </path>
                    </svg>
                </a>
                <a onClick={() => setSideMenuOpen(false)}
                    
                    className="menu-link wef-fxxg6w"
                    href="https://www.reddit.com/user/forthepeoplengo">
                    <img src={Reddit_logo} className="menu-icon wef-yekspl"  alt="reddit logo" />
                </a>
            </div>        
        </>
    );
};

export default SocialMediaLinks;