import React from "react";
import './EditProfBtn.css';
import { useNavigate } from "react-router-dom";

const EditProfBtn = () => {
    const navigate = useNavigate();

    const editprofile = (e) => {
        e.preventDefault();
        navigate("/editprofpage");
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