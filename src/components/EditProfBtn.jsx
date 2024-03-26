import React, { useState } from "react";
import './EditProfBtn.css';
import EditProfpage from "../pages/EditProfPage";
// import { useNavigate } from "react-router-dom";

const EditProfBtn = (props) => {
    // const navigate = useNavigate();
    const [val, setVal] = useState(0);
    // const [dp, setDp] = useState("");
    // const [cover, setCover] = useState("");
    // const [user, setUser] = useState("");
    // const [about, setAbout] = useState("");

    const editprofile = (e) => {
        e.preventDefault();
        setVal(1);
        // navigate("/editprofpage");
    };
    const changeVal = (dataDp, dataCover, dataUser, dataAbout) => {
        setVal(0);
        props.handleCB2(dataDp, dataCover, dataUser, dataAbout);
    }
    return (
        <>
            <form onClick={editprofile}>
                <button className="EP-btn absolute w-screen h-56 -translate-x-1/2 left-1/2 bottom-24  
                    xl:top-1/2 xl:left-3/4
                    sm:-bottom-16
                    md:-bottom-16
                    lg:-bottom-16
                ">
                    <p className="text-lg text-bold my-auto text-black">Edit Profile</p>
                </button>
            </form>
            {
                (val === 1) && <EditProfpage handleCB={changeVal} />
            }
        </>
    );
}

export default EditProfBtn;