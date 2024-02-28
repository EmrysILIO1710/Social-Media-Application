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
            <div className="username-box absolute left-1/2 top-1/2 w-max text-center -translate-x-1/2
                sm:top-3/4 
                md:top-3/4 md:left-1/2
                lg:left-1/2
                xl:left-1/2 xl:text-left xl:top-1/2
            ">
                <p className="text-2xl font-bold
                    sm:text-3xl
                    md:text-3xl
                    lg:text-3xl
                    xl:text-3xl
                ">{name}</p>
                <p className="text-lg font-bold leading-none
                    sm:text-xl
                    md:text-xl
                    lg:text-xl
                    xl:text-xl xl:text-left
                ">{user}</p>
            </div>
    );
}
export default Username;
