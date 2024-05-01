import React, { useEffect, useState } from "react";
import "./Profcov.css";
import PC from "../pictures/background3.jpg";

const Profcov = (props) => {
    const [cover, setCover] = useState(PC);
    useEffect(() => {
        if(props.cover !== ""){
            setCover(props.cover);
        }
    }, [props.cover])
    return(
        <>
            <div className="PC-rect w-full max-w-auto 
               sm:h-72
            ">
                <img className = "PC-virat z-0" src={cover} alt="" />
            </div>
        </>
    )
}
export default Profcov;
