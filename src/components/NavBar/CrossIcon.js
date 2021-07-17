import React from "react";

const CrossIcon = () => {
    return (
        <> 
            < button type = "button" className = "navigationbar-button search-button-visible" > 
                <svg
                    viewBox="0 0 18 18"
                    focusable="false"
                    className="navigationbar-icon cross-button-icon"
                    aria-hidden="true">
                    <path
                        d="M15.9073 0L9 6.9073 2.0928 0 0 2.0928 6.9073 9 0 15.9073 2.0928 18 9 11.0927 15.9073 18 18 15.9073 11.0927 9 18 2.0928 15.9073 0z"
                        fill="currentColor">

                    </path>
                </svg>
            </button>
</>
    )
};

export default CrossIcon;