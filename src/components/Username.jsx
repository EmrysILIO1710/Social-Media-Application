import React, { useEffect, useState } from "react";
import './Username.css';
    
const Username = (props) => {
    const [user, setUser] = useState("emrysILIO_17");
    const [name, setName] = useState("Spandan Bera");
    useEffect(() => {
        if(props.user !== ""){
            setUser(props.user);
        }
        if(props.name !== ""){
            setName(props.name);
        }
    }, [props.user, props.name])
    return(
            <div className="username-box w-full
               text-center md:text-left 
            ">
                <p className="text-2xl font-bold
                    sm:text-3xl md:text-2xl 
                ">{name}</p>
                <p className="text-lg font-bold leading-none
                    sm:text-xl
                ">{user}</p>
            </div>
    );
}
export default Username;
