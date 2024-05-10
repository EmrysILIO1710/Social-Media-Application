import React, { useEffect } from "react";
import './LandingPage.css';
import LandingForm from "../components/LandingForm";

const LandingPage = (props) => {
    useEffect(() => {
        props.handleCB(false);
    }, )

    return(
        <>
            <div className="LP-cover">
                <LandingForm />
                <div className="LP-content">
                    <h1 className="LP-box-h1">Welcome To <span style={{color: "rgb(254, 163, 82)"}}>adda</span>Gram</h1>
                    <br />
                    <h2 >The new way to connect</h2>
                    <h2 >Discover new people</h2>
                    <h2 >Share memories</h2>
                </div>
            </div>
        </>

    );
};

export default LandingPage;