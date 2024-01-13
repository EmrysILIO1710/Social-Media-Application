import React from "react";
import './LandingPage.css';
import LandingForm from "../components/LandingForm";


const LandingPage = () => {
    return(
        <>
            <LandingForm />
            
        <div className="LP-content">
        <h1 className="LP-box-h1">Welcome To <span style={{color: "rgb(254, 163, 82)"}}>adda</span>Gram</h1>
            <h2>The new way to connect</h2>
            <h2>Discover new people</h2>
            <h2>Share memories</h2>
            
        </div>
        
        </>

    );
};

export default LandingPage;