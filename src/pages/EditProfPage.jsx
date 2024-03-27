import React, { useState } from "react";
import './EditProfPage.css'; 
// import dpimg from '../pictures/sampleprof3.jpg';
import coverimg from '../pictures/background3.jpg';

const EditProfpage = (props) => {
    const [dpshadow, setDpshadow] = useState("none");
    const [covershadow, setCovershadow] = useState("none");
    const [dp, setDp] = useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80");
    const [cover, setCover] = useState(coverimg);
    const [user, setUser] = useState("emrysILIO_17");
    const [about, setAbout] = useState("An engineer. A full stack devoloper. From london. Wish me on 23 march. Troublemaker, go-getter. Ain't no thang like a chick'n wing mamacita... #foodlover #backend #fullstack");
    const [epp, setEpp] = useState("block");

    const showDp = () => {
        setDpshadow("block");
    }
    const hideDp = () => {
        setDpshadow("none");
    }
    const showCover = () => {
        setCovershadow("block");
    }
    const hideCover = () => {
        setCovershadow("none");
    }
    const handleChangeDp = (e) => {
        setDp(URL.createObjectURL(e.target.files[0]));
    }
    const handleChangeCover = (e) => {
        setCover(URL.createObjectURL(e.target.files[0]));
    }
    const changeUser = (e) => {
        setUser(e.target.value);
    }
    const changeAbout = (e) => {
        setAbout(e.target.value);
    }
    const submitForm = (e) => {
        e.preventDefault();
        // SDTProfilePageFEPP(dp, cover, user, about);
        setEpp("none");

        props.handleCB(dp, cover, user, about);
    }

    return(
        <div className="EPP" style={{display: epp, color: "black"}}>  
            <div className="EPP-container">
                <form onSubmit={submitForm}>
                    <h1 className="EPP-h2">Edit Profile</h1>
                    <br />
                    <hr />
                    <br />
                    <h2 className="EPP-h2">Change Profile Picture</h2>
                    <div className="EPP-DP-box" onMouseOver={showDp} onMouseOut={hideDp}>
                        <img src={dp} alt="" className="EPP-img" />
                        <div className="EPP-shadow" style={{display: dpshadow}}>
                            <input type="file" onChange={handleChangeDp} className="EPP-DP-btn" />
                        </div>
                    </div>
                    <br />
                    <h2 className="EPP-h2">Change Cover Picture</h2>
                    <div className="EPP-cover-box" onMouseOver={showCover} onMouseOut={hideCover}>
                        <img src={cover} alt="" className="EPP-img" />
                        <div className="EPP-shadow" style={{display: covershadow}}>
                            <input type="file" onChange={handleChangeCover} className="EPP-cover-btn" />
                        </div>
                    </div>
                    <br />
                    <h2 className="EPP-h2">Change User Name</h2>
                    <input type="text" placeholder="enter new username..." value={user} onChange={changeUser} className="EPP-input" />
                    <h2 className="EPP-h2">Change About</h2>
                    <textarea cols="30" rows="10" placeholder="enter new bio..." className="EPP-input-bio" value={about} onChange={changeAbout} />
                    <button type="submit" className="EPP-submit">Update Details</button>
                </form>
            </div>
        </div>
    );
}

export default EditProfpage