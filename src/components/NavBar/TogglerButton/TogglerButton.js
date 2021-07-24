import React from "react";

const TogglerButton = () => {
    return (
        <>  
                <svg
                    viewBox="0 0 20 15"
                    focusable="false"
                    className="navigationbar-icon ham-icon"
                    aria-hidden="true">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.2878 2.2118H1.077C.4817 2.2118 0 1.7167 0 1.1069 0 .4951.4817 0 1.077 0h17.2108c.5932 0 1.0749.4951 1.0749 1.107 0 .6096-.4817 1.1048-1.0749 1.1048zM18.2878 8.6053H1.077C.4817 8.6053 0 8.1102 0 7.5004c0-.6107.4817-1.1059 1.077-1.1059h17.2108c.5932 0 1.0749.4951 1.0749 1.106 0 .6096-.4817 1.1048-1.0749 1.1048zM18.2878 15.0001H1.077C.4817 15.0001 0 14.505 0 13.8953c0-.6118.4817-1.107 1.077-1.107h17.2108c.5932 0 1.0749.4951 1.0749 1.107 0 .6097-.4817 1.1048-1.0749 1.1048z"
                        fill="currentColor">

                    </path>
                </svg>
            
        </>
    )
}

export default TogglerButton;