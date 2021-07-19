import React from "react";

const BackDrop = ({setSideMenuOpen}) =>{
    return(
        <>
        <div className="backdrop" onClick={()=>setSideMenuOpen(false)}>

        </div>
        </>
    )
}

export default BackDrop ;