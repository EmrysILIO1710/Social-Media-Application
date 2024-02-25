import React, { useState } from "react";
import './EditProfBtn.css';
import EditProfpage from "../pages/EditProfPage";
// import { useNavigate } from "react-router-dom";

const EditProfBtn = () => {
    // const navigate = useNavigate();
    const [val, setVal] = useState(0);

    const editprofile = (e) => {
        e.preventDefault();
        setVal(1);
        // navigate("/editprofpage");
    };
    const changeVal = () => {
        setVal(0);
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
                    <p className="text-lg text-bold my-auto">Edit Profile</p>
                </button>
            </form>
            {
                (val === 1) && <EditProfpage handleCB={changeVal} />
            }
        </>
    );
}

export default EditProfBtn;