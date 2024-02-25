import React from "react";
import "./Profcov.css";
import PC from "../pictures/Viratcover.jpg";

const Profcov = () => {
    return(
        <>
            <div className="PC-rect absolute left-1/2 w-screen h-56 max-w-auto -translate-x-1/2 
                sm:w-screen sm:h-80
                xl:w-2/3 xl:h-80
                md:w-screen md:h-80
                lg:w-screen lg:h-80
            ">
                <img className = "PC-virat" src={PC} alt="" />
            </div>
        </>
    )
}
export default Profcov;
