import React from "react";

const SearchBar = () => {
    return (
        <> 
            < div   
                
                className = "search-bar-container" 
                >
                <div 
                    className="search-bar-child search-bar-animate-open" 
                    >

                    <form action="/search" method="get" 
                        className="search-form"
                        >

                        <div 
                            className="navigationbar-input__group form-child"
                            >
                            <input
                                name="query"
                                aria-label="Search"
                                placeholder="Search"
                                className="navigationbar-input form-input"
                            />

                                <div className="navigationbar-input__right-element search-bar-button-div">

                                    <button type="submit" className="navigationbar-button search-button-invisible">

                                        <svg
                                            viewBox="0 0 20 20"
                                            focusable="false"
                                            className="navigationbar-icon search-button-icon"
                                            aria-hidden="true"
                                            >
                                            <path
                                                d="M19.6672 18.1075l-4.9047-4.9112c2.4663-3.2096 2.2201-7.8467-.7396-10.7819C12.4065.7962 10.3234 0 8.2136 0 6.104 0 4.0206.7951 2.4044 2.4144c-3.2059 3.2095-3.2059 8.422 0 11.6315 1.6164 1.6182 3.6995 2.4144 5.8092 2.4144 1.7534 0 3.5079-.5487 4.9606-1.6739l4.9315 4.8846c.2194.2197.4934.329.7942.329.2741 0 .5759-.1093.7943-.329.4121-.4115.4121-1.1252-.0268-1.5635h-.0002zm-11.427-3.8688c-1.6163 0-3.0968-.6312-4.2474-1.7553-2.3293-2.3319-2.3293-6.1447 0-8.5045 1.124-1.1253 2.6311-1.7554 4.2475-1.7554 1.6163 0 3.0968.6312 4.2475 1.7554 1.1507 1.1252 1.7534 2.634 1.7534 4.2522 0 1.6182-.6305 3.1004-1.7534 4.2523-1.124 1.152-2.658 1.7553-4.2475 1.7553z"
                                                fill="currentColor">

                                            </path>
                                        </svg>
                                    </button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default SearchBar;