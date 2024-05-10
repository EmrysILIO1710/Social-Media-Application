import React, { useEffect, useState } from "react";
import "./Userimage.css";


const Userimage = (props) => {
    const [dp, setDp] = useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80");
    useEffect(() => {
        if(props.dp !== ""){
            setDp(props.dp);
        }
    }, [props.dp])
    return(
        <>
            <div className="Useimg-circle w-52 h-52 max-w-auto  border-white border-3  z-10  
                lg:w-60 lg:h-60 
            ">
                <img className="Useimg-img" src={dp} alt="" />    
            </div>
        </>
    )
}
export default Userimage;
