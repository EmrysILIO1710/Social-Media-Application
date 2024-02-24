import React from "react";
import "./Userimage.css";


const Userimage = () => {
    return(
        <>
            <div className="Useimg-circle absolute left-1/2 top-1/4  w-40 h-40 max-w-auto -translate-x-1/2 border-white border-3
                xl:top-1/3 xl:w-60 xl:h-60 xl:left-1/3
                lg:left:1/2
                md:top-1/3 md:w-60 md:h-60 md:left-1/2
                sm:top-1/3 sm:w-60 sm:h-60
            ">
                <img className="Useimg-img" src="" alt="" />    
            </div>
        </>
    )
}
export default Userimage;
