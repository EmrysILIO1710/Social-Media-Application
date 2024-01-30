import React, { useState } from "react";
import './EditProfBtn.css';
// import { useNavigate } from "react-router-dom";

const EditProfBtn = ({ SDTProfilePageFEPB }) => {
    // const navigate = useNavigate();
    const [val, setVal] = useState(0);

    const editprofile = (e) => {
        e.preventDefault();
        setVal(1);
        SDTProfilePageFEPB(val)
        // navigate("/editprofpage");
    }
    return (
        <>
            <form onClick={editprofile}>
                <button className="EP-btn"><h1>Edit Profile</h1></button>
            </form>
        </>
    );
}

export default EditProfBtn;