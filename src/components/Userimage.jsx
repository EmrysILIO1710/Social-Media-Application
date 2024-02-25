import React, { useState } from "react";
import "./Userimage.css";


const Userimage = () => {
    const [dp, setDp] = useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80");
    return(
        <>
            <div className="Useimg-circle absolute left-1/2 top-1/4  w-40 h-40 max-w-auto -translate-x-1/2 border-white border-3
                xl:top-1/3 xl:w-60 xl:h-60 xl:left-1/3
                lg:left:1/2
                md:top-1/3 md:w-60 md:h-60 md:left-1/2
                sm:top-1/3 sm:w-60 sm:h-60
            ">
                <img className="Useimg-img" src={dp} alt="" />    
            </div>
        </>
    )
}
export default Userimage;
