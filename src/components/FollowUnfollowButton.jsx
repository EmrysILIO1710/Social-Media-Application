import React, { useState } from "react";
import './FollowUnfollowButton.css';
// import EditProfpage from "../pages/EditProfPage";
// import { useNavigate } from "react-router-dom";

const FollowUnfollowButton = (props) => {
    // const navigate = useNavigate();
    const [border, setBorder] = useState("none");
    const [bg, setBg] = useState("rgb(254, 163, 82)");
    const [val, setVal] = useState("Follow");
    // const [dp, setDp] = useState("");
    // const [cover, setCover] = useState("");
    // const [user, setUser] = useState("");
    // const [about, setAbout] = useState("");

    const follow = (e) => {
        if(val === "Follow"){
            setVal("Unfollow");
            setBg("rgba(254, 162, 82, 0)");
            setBorder("3px solid rgb(254, 163, 82)")
        }
        else{
            setVal("Follow");
            setBg("rgba(254, 162, 82)");
            setBorder("none")
        }
        e.preventDefault();
        // setVal(1);
        // navigate("/editprofpage");
    };
    // const changeVal = (dataDp, dataCover, dataUser, dataAbout) => {
    //     setVal(0);
    //     props.handleCB2(dataDp, dataCover, dataUser, dataAbout);
    // }
    return (
        <>
            <form onClick={follow}>
                <button className="FU-btn absolute w-screen h-56 -translate-x-1/2 left-1/2 bottom-24  
                    xl:top-1/2 xl:left-3/4
                    sm:-bottom-16
                    md:-bottom-16
                    lg:-bottom-16
                "
                    style={{backgroundColor: bg, border: border}}
                >
                    <p className="text-lg text-bold my-auto">{val}</p>
                </button>
            </form>
            
        </>
    );
}

export default FollowUnfollowButton;